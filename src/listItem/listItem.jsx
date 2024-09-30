import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './listItem.css'

//Here, the actual list item is converted into a <li></li> HTML element
export function ListItem( props ) {

    const { text, completed, toggleTask, handleClearByID } = props;

    const updateCheck = ()=>{
      toggleTask(text);
    };

    const clearCurrentItem = (e) =>{
      //e.stopPropagation();
      handleClearByID(text);
    };

    const [hovered, setHovered] = useState(false);      // New state to handle hover
  
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };

    return (
      <li className="List-item">
        <span>
          <i 
            className="bi-check"
            onClick={updateCheck} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              fontSize: '2rem',
              color: hovered
                ? completed
                  ? 'lightgray' // if hovered AND completed, gray
                  : 'green'     // if hovered AND uncompleted, green
                : completed
                ? 'green'       // Normal color based on the `completed` state
                : 'lightgray',
            }}>
          </i>
        </span>
        <p className={`List-item-p ${completed ? 'completed' : '' }`}>
          {text}
        </p>
        <span className="Icon-delete" >
          <i className="bi-x-lg" onClick={clearCurrentItem} ></i>
        </span>
      </li>
    );
  }