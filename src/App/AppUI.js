import React, {useState} from "react";
import { Counter } from "../counter/counter";
import SearchInput from "../SearchInput/SearchInput";
import { TodoList } from "../todoList/todoList";
import { TodoContext } from "../TodoContext";
import {Modal} from "../Modal";
import { TodoForm } from "../TodoForm";

const AppUI = ( ) => {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

return (
    <div className="App">

        <Counter></Counter>

        <SearchInput></SearchInput>
        
        <TodoList></TodoList>

        <button className='addButton' data-message="Click me to submit"><i className='bi bi-plus' onClick={() => setOpenModal( !openModal) } ></i></button>

        {openModal && <Modal> <TodoForm></TodoForm> </Modal>}
    </div>
  );
}

export {AppUI}