import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './listItem.css'

//Here, the actual list item is converted into a <li></li> HTML element
export function ListItem( props ) {

    const { text, completed, toggleTask, handleClearByID, moveItem } = props;

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

    const rearrangeList = (e)=>{
      if(e.target.classList.contains("up-btn")){
        e.target.closest('li').classList.add("move-up");  //adds animation class to li
        setTimeout( ()=>{
          moveItem(text, completed, "up"); //new method to rearrange list
          e.target.closest('li').classList.remove("move-up");
        }, 400 );
      }
      if(e.target.classList.contains("down-btn")){
        e.target.closest('li').classList.add("move-down"); //adds animation class to li
        
        setTimeout( ()=>{
          moveItem(text, completed, "down");//new method to rearrange list
          e.target.closest('li').classList.remove("move-down");
        }, 400 );
        //
      }
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
        <span className="up-btn" onClick={rearrangeList}>▲</span>
        <span className="down-btn" onClick={rearrangeList}>▼</span>
      </li>
    );
  }