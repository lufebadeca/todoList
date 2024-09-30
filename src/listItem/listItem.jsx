import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './listItem.css'

//Here, the actual list item is converted into a <li></li> HTML element
export function ListItem( props ) {

    const { id, text, completed, toggleTask, handleClearByID } = props;

    const updateCheck = ()=>{
      toggleTask(id);
    };

    const clearCurrentItem = (e) =>{
      //e.stopPropagation();
      handleClearByID(id);
    };

    return (
      <li className="List-item">
        <span>
          <i className="bi-check" onClick={updateCheck} style={{ fontSize: '2rem', color: completed ? 'lightgray' : 'green' } }></i>
        </span>
        <p className={`List-item-p ${completed ? 'completed' : '' }`}>
          {text}
        </p>
        <span className="Icon-delete" >
          <i className="bi-x-lg" style={{color: 'red'}} onClick={clearCurrentItem}></i>
        </span>
      </li>
    );
  }