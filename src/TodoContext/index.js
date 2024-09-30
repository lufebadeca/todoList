import { useState } from "react";
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

      //now, instead of using the regular useState, we use our custom state, the initial state was already
    //set in the custom state, instead, we give custom parameters: itemName and initial val
    //edit, to add loading and error states
    const {storageItem: list, updateItem, loading, error} = useLocalStorage('test1', []); 
    console.log("My list is:");
    console.log(list);
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const completedItems = list.filter(item=> !!item.completed).length;
    const totalItems = list.length;

    const addTask = (taskText) =>{
        console.log("function addTask in todoContext. Receiving " + taskText);
        const newTasks = [...list]; //copy tasks list
        newTasks.push({text: taskText, completed: false})
        updateItem(newTasks);
    };

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

    return(
        <TodoContext.Provider value={ {addTask, completedItems, totalItems, filteredList, searchValue, updateSearchVal, toggleTask, handleClearByID, loading, error, openModal, setOpenModal} }>
            {children}
        </TodoContext.Provider>

    );
}

export {TodoContext, TodoProvider};