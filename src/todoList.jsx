import React from "react";

// the component receives an array destructured into a single variable 'list'
export function TodoList({lista}){
    return(
    <ul>
        {lista.map( listItem=>(
            <li>{listItem.task}</li>
        ))}
    </ul>
);
}