import { useState } from "react";
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

    /*now, instead of using the regular useState, we use our custom state, the initial state was already
    set in the custom state, instead, we give custom parameters: itemName and initial val
    edited for adding loading and error states*/
    const {storageItem: list, updateItem, loading, error} = useLocalStorage('test1', []); 
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const completedItems = list.filter(item=> !!item.completed).length;
    const totalItems = list.length;

    const [editing, setEditing] = useState(false); //controller for 'edit' modal behavior 

    const addTask = (taskText) =>{
        const newTasks = [...list]; //copy tasks list
        newTasks.push({text: taskText, completed: false})
        updateItem(newTasks);
    };

    const toggleTask = (id) => {
        //copy tasks list
        const newTasks = [...list];
        //find selected task, by id
        const task = newTasks.find( (task) => task.text === id );
        task.completed = !task.completed; // if true, turns into false, if false, into true
        updateItem(newTasks); //updating the task list with a 'completed' value updated
    };

    const handleClearByID = (id) => {
        //we filter and select all tasks different from the current one to keep, and the current one will be deleted
        const newTasks = list.filter( (task)=> task.text !== id );
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
    
    const editTaskItem = (oldText, newText) =>{
        const repeated = list.find( (item)=> item.text===newText );
        if (repeated) {
            alert("Esa tarea ya existe");
        }
        else{
            const newList = list.map( (item)=>{
                if (item.text===oldText) {
                    item.text=newText
                }
                return item;
            } );
            updateItem(newList);
        }
    }

    const moveItem=(itemText, completedBool, direction)=>{

        const newList = [...list];
        const index = newList.findIndex( (item)=> item.text===itemText );

        if(direction==="up" && index>0){
            [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
            updateItem(newList);
        }
        if(direction==="down" && index < newList.length-1 ){
            [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
            updateItem(newList);
        }
    }

    return(
        <TodoContext.Provider value={ {addTask, completedItems, totalItems, list,
            filteredList, searchValue, updateSearchVal, moveItem, toggleTask, editTaskItem,
            handleClearByID,loading, error, openModal, setOpenModal, editing, setEditing} }>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};