import logo from './logo.svg';
import './App.css';
import { TodoList } from './todoList';
import { v4 as uuidv4 } from 'uuid';  //ID generator

import React, { useState, useRef } from 'react';

function App() {

  const [list, setLists] = useState( [ {id: 1, task:"Tarea 1", completed: false} ] );
  
  //reference to retrieve data from input and use in handle
  const taskRef = useRef();
  
  //method to add tasks
  const handleTaskAdd = () =>{
    const taskData = taskRef.current.value;
    if (taskData === '') return;

    //if no empty data, create element and make changes on state
    setLists( (prevList) => {
      //notice here it's returning the old array plus a new task 
      return [...prevList,  {id: uuidv4(), task: taskData, completed: false }  ] ; 
    });
  taskRef.current.value = null;
  };

  const toggleTask = (id) => {
    //copy tasks list
    const newTasks = [...list];

    //find selected task, by id
    const task = newTasks.find( (task) => task.id === id );

    task.completed = !task.completed; // if true, turns into false, if false, into true
    setLists(newTasks); //updating the task list with a 'completed' value updated
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TodoList list={list} toggleTask={toggleTask} ></TodoList>
        <input type='text' placeholder="New task" ref={taskRef}></input>
        <button onClick={handleTaskAdd}>+</button>
        <button>-</button>

      </header>
    </div>
  );
}

export default App;
