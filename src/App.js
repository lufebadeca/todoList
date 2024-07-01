import logo from './logo.svg';
import './App.css';
import { TodoList } from './todoList';
import ListItem from './listItem';
import { Counter } from './counter';
import React, { useState, useRef } from 'react';

function App() {

  const [list, setLists] = useState( [ {id: 1, task:"Tarea 1", completed: false} ] );
  
  const taskRef = useRef();
  
  const handleTaskAdd = () =>{
    const task = taskRef.current.value;
    if (task === '') return;

    setLists( (prevTasks) => {
      return [...prevTasks,  {id: '1234', task: task, completed: false }  ] ; 
  });
  taskRef.current.value = null;
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TodoList lista={list}></TodoList>
        <input type='text' placeholder="New task" ref={taskRef}></input>
        <button onClick={handleTaskAdd}>+</button>
        <button>-</button>

      </header>

    </div>
  );
}

export default App;
