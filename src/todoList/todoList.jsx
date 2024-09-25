import React from "react";
import { ListItem } from '../listItem/listItem'
import "./todoList.css"

// the component receives an array destructured into a single variable 'list'
//here, the objective is to convert the array into elements using map function
export function TodoList( {list, toggleTask, handleClearByID} ){
    return(
    <ul className='mylist'>
        {list.map( listItem=>(
            <ListItem key={listItem.id} {...listItem} id={listItem.id} toggleTask={toggleTask} handleClearByID={handleClearByID}></ListItem>
        ))} 
    </ul>
);
}