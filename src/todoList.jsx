import React from "react";
import { ListItem } from '../src/listItem'

// the component receives an array destructured into a single variable 'list'
//here, the objective is to convert the array into elements using map function
export function TodoList( {list, toggleTask} ){
    return(
    <ul>
        {list.map( listItem=>(
            <ListItem key={listItem.id} {...listItem} toggleTask={toggleTask} ></ListItem>
        ))}
    </ul>
);
}