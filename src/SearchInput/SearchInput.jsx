import React from "react";
import './searchInput.css';

const SearchInput = ({searchValue, updateSearchVal}) =>{

    const updateText = (e) =>{
        const newVal = e.target.value;
        updateSearchVal(newVal);
    }

    return(
        <>
            <label htmlFor='searchBox' >Filtrar tareas</label>
            <input type='text' id='searchBox' name='searchBox' placeholder="busca una tarea aquí " value={searchValue} onChange={updateText} className='input'></input>
        </>
    )
}

export default SearchInput;