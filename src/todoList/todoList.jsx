import React from "react";
import { ListItem } from '../listItem/listItem'
import "./todoList.css"
import { TodoContext } from "../TodoContext";
import {EmptyTodos} from '../emptyTodos';
import {TodosError} from '../todosError';
import {LoadingTodos} from '../loadingTodos';

// the component receives an array destructured into a single variable 'list'
//here, the objective is to convert the array into elements using map function
export function TodoList( ){

    //useContext
    const { filteredList, list, toggleTask, handleClearByID, loading, error} = React.useContext(TodoContext);

    return(
    <ul className='mylist'>

        {loading && <><LoadingTodos/><LoadingTodos/><LoadingTodos/><LoadingTodos/></>}
        {error && <TodosError/>}
        {(!loading && !error && list.length===0) && <EmptyTodos/>}

        {filteredList.map( listItem=>(
            <ListItem key={listItem.id} {...listItem} id={listItem.id} toggleTask={toggleTask} handleClearByID={handleClearByID}></ListItem>
        ))} 
    </ul>
);
}