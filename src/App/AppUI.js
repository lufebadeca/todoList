import React, {useState} from "react";
import { Counter } from "../counter/counter";
import SearchInput from "../SearchInput/SearchInput";
import { TodoList } from "../todoList/todoList";
import { TodoContext } from "../TodoContext";
import {Modal} from "../Modal";
import { TodoForm } from "../TodoForm";
import { useLanguage } from "../LanguageContext";
import { LanguageSelector } from "../LanguageSelector";

const AppUI = ( ) => {
  const { openModal, setOpenModal, editing } = React.useContext(TodoContext);

  const { language, toggleLanguage } = useLanguage();

return (
    <div className="App">

        <LanguageSelector></LanguageSelector>

        <Counter></Counter>

        <SearchInput></SearchInput>
        
        <TodoList></TodoList>

        <button className='addButton' data-message="Click me to submit"><i className='bi bi-plus' onClick={() => setOpenModal( !openModal) } ></i></button>

        {openModal && <Modal> <TodoForm editing={editing}></TodoForm> </Modal>}
    </div>
  );
}

export {AppUI}