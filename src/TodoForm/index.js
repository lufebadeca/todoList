import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";


function TodoForm() {

    const [newTaskVal, setNewTaskVal] = React.useState("");
    const {addTask, setOpenModal, list} = React.useContext(TodoContext);

    const onChange=(e)=>{
        setNewTaskVal( e.target.value );
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        const coincidences = list.filter( (item)=>item.text===newTaskVal.trim() );
        //console.log(coincidences);
        if( newTaskVal.trim().length===0 ){
            alert("Ingrese un texto para continuar");
        }else if ( coincidences.length>0 ){
            alert("Ya existe una tarea exactamente igual");
            setNewTaskVal("");
        }else{
            addTask( newTaskVal.trim() );
            setOpenModal(false);
        }
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Agregue una nueva tarea</label>
            <textarea onChange={onChange} value={newTaskVal} placeholder="alimentar al gato" required autoFocus></textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" onClick={()=>setOpenModal(false)}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm};