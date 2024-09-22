import './App.css';
import { v4 as uuidv4 } from 'uuid';  //ID generator
import { AppUI } from './AppUI';
import React, { useState, useRef, useEffect } from 'react';

//In this project, I successfully used UseState to update the state of the variable list

//localStorage.getItem('test1');
//localStorage.setItem('test1', stringifiedList);
//localStorage.remove('test1'); 

//firstly, we create an absstraction to avoid direct mentions to localStorage in the app function (we embed this in a custom hook)
function useLocalStorage (itemName, initialValue) {

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
  
  const localStorageItems = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItems){
    
    localStorage.setItem(itemName, JSON.stringify(initialValue) );
    parsedItem = initialValue;
    //const stringifiedList = JSON.parse(itemsList);
    //localStorage.setItem('test1', stringifiedList);
  }else{
    parsedItem = JSON.parse(localStorageItems);
  }

  const [item, setItem] = useState(parsedItem);

  //is necessary to update not only the local storage but also the state of the items list simultaneously
  const updateItem = (newItem) =>{
    setItem(newItem);
    const stringifiedList = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedList);
  };

  //notice that we are exporting the state variable (item), but along with the custom updater (storage and state) instead of the state setter
  return [item, updateItem];
};

function App() {

  //now, instead of using the regular useState, we use our custom state, the initial state was already set in the custom state, instead, we give custom parameters
  const [list, updateItem] = useLocalStorage('test1', []); 
  const [searchValue, setSearchValue] = useState("");

  const completedItems = list.filter(item=> !!item.completed).length;
  const totalItems = list.length;

  //reference to retrieve data from input and use in handle
  const taskRef = useRef();
  const taskFilterRef = useRef();
  
  //method to add tasks
  /*const handleTaskAdd = () =>{
    const taskData = taskRef.current.value;
    if (taskData === '') return;

    //if no empty data, create element and make changes on state
    setLists( (prevList) => {
      //notice here it's returning the old array plus a new task. A function is passed instead of just the new array 
      //to ensure most up-to-date version on state. This avoids a performance bug 
      return [...prevList,  {id: uuidv4(), text: taskData, completed: false }  ] ; 
    });
    taskRef.current.value = null;
  };*/

  const toggleTask = (id) => {
    //copy tasks list
    const newTasks = [...list];

    //find selected task, by id
    const task = newTasks.find( (task) => task.id === id );

    task.completed = !task.completed; // if true, turns into false, if false, into true
    updateItem(newTasks); //updating the task list with a 'completed' value updated
  };

  const handleClearByID = (id) => {
    //we filter and select all tasks different from the current one to keep, and the current one will be deleted
    const newTasks = list.filter( (task)=> task.id !== id );
    updateItem(newTasks);
  };

  //derived state, updates searchValue every time input text is updated (toLowerCase for all coincidences)
  const filteredList = list.filter( 
    (taskItem)=> taskItem.text.toLowerCase().includes(searchValue)
  );

  //function to update search value
  const updateSearchVal = (text)=>{
    setSearchValue(text);
  }

  console.log('log 1');
  useEffect( () => { console.log('effect log 2'); }, [totalItems] );
  console.log('log 3');


  return (
    <AppUI
    completed={ completedItems }
    total={totalItems}
    filteredList={filteredList}
    searchValue={searchValue}
    updateSearchVal={updateSearchVal}
    toggleTask={toggleTask}
    handleClearByID={handleClearByID}
    ></AppUI>
    /*<div className="App">
      <header className="App-header">

        <Counter completed={ list.filter(item=>item.completed).length } total={list.length} ></Counter>

        <SearchInput searchValue={searchValue} updateSearchVal={updateSearchVal}></SearchInput>
        
        <TodoList list={filteredList} toggleTask={toggleTask} handleClearByID={handleClearByID}></TodoList>

        <button className='addButton' data-message="Click me to submit"><i className='bi bi-plus' ></i></button>

      </header>
    </div>*/
  );
}

export default App;
