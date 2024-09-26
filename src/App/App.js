import './App.css';
import { v4 as uuidv4 } from 'uuid';  //ID generator
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
import React, { useState, useRef, useEffect } from 'react';

//In this project, I successfully used UseState to update the state of the variable list

//localStorage.getItem('test1');
//localStorage.setItem('test1', stringifiedList);
//localStorage.remove('test1'); 

//firstly, we create an absstraction to avoid direct mentions to localStorage in the app function (we embed this in a custom hook)


function App() {

  //now, instead of using the regular useState, we use our custom state, the initial state was already
  //set in the custom state, instead, we give custom parameters: itemName and initial val
  //edit, to add loading and error states
  const {storageItem: list, updateItem, loading, error} = useLocalStorage('test1', []); 
  const [searchValue, setSearchValue] = useState("");
  console.log(list);
  const completedItems = list.filter(item=> !!item.completed).length;
  const totalItems = list.length;
  
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
  useEffect( () => { 
    console.log('effect log 2'); }, [totalItems]
  );
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
      loading={loading}
      error={error}
    ></AppUI>
  );
}

export default App;
