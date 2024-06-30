import logo from './logo.svg';
import './App.css';
import { TodoList } from './todoList';
import ListItem from './listItem';
import { Counter } from './counter';
import { useState } from 'react';

function App() {

  const [list, setLists] = useState( [ {id: 1, task:"Tarea 1", completed: false} ] );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TodoList lista={list}></TodoList>

        <Counter></Counter>

      </header>

    </div>
  );
}

export default App;
