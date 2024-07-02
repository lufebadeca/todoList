import React from "react";

//Here, the actual list item is converted into a <li></li> HTML element
export function ListItem( props ) {

    const { id, task, completed, toggleTask } = props;

    const updateCheck = ()=>{
      toggleTask(id);
    }

    return (
        <li> 
          {task} &nbsp;<input type='checkbox' checked={completed} onChange={updateCheck}/> 
        </li>
    );
  }