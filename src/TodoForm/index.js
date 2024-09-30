import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";


function TodoForm() {

    const [newTaskVal, setNewTaskVal] = React.useState("");
    const {addTask, openModal, setOpenModal} = React.useContext(TodoContext);

    const onChange=(e)=>{
        setNewTaskVal( e.target.value );
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        addTask( newTaskVal );
        setOpenModal(false)
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Agregue una nueva tarea</label>
            <textarea onChange={onChange} value={newTaskVal} placeholder="alimentar al gato"></textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" onClick={()=>setOpenModal(false)}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm};