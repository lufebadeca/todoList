import React from "react";

//localStorage.removeItem('test1);
    /*const defaultTasks =
  [
  {id: 1, text: 'despertar', completed: true},
  {id: 2, text: 'cepillar dientes', completed: false},
  {id: 3, text: 'preparar desayuno', completed: false},
  {id: 4, text: 'bañarse', completed: false},
  {id: 5, text: 'arreglarse', completed: false},
  {id: 6, text: 'desayunar', completed: false},
  {id: 7, text: 'tomar el bus', completed: false},
  {id: 8, text: 'disfrutar la escuela', completed: false}
  ];

  localStorage.setItem('test1', JSON.stringify(defaultTasks) ); */

    //abstraction to store any data (item) from and to localStorage
function useLocalStorage (itemName, initialValue) {
    //watch out, item here refers to localStorage instance, not the actual list

  const [storageItem, setStorageItem] = React.useState(initialValue);
  //2 new states are needed: loading and error
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  let parsedItem;

  //use of effects to handle asynchronous process
  React.useEffect( ()=>{

    setTimeout( ()=>{   //setTimeout solves the problem of infinite updates between state and effect
        try {
            const localStorageItems = localStorage.getItem(itemName);
            if (!localStorageItems){    //if there is no data
                localStorage.setItem(itemName, JSON.stringify(initialValue) );
                parsedItem = initialValue;
                setStorageItem(parsedItem);
                //const stringifiedList = JSON.parse(itemsList);
                //localStorage.setItem('test1', stringifiedList);
              }else{
                parsedItem = JSON.parse(localStorageItems);
                setStorageItem(parsedItem);
              }
              setLoading(false);
        
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }, 1500);

}, []);  //the effect is executed only once, upon load using empty list (dependency array)

  //is necessary to update not only the local storage but also the state of the items list simultaneously
  const updateItem = (newItem) =>{
    setStorageItem(newItem);
    const stringifiedList = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedList);
  };

  //notice that we are exporting the state variable (stgItem) along with a custom updater function 
  // instead of the state setter directly. Also loading and error states are passed 
  return {storageItem, updateItem, loading, error}; //now, instead of a list, we return an array
};

export {useLocalStorage};