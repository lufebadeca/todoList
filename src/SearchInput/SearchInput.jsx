import React from "react";
import './searchInput.css';
import { TodoContext } from "../TodoContext";
import {useLanguage } from "../LanguageContext";

const SearchInput = ( ) =>{

    const {t} = useLanguage(); //translations for current language

    //useContext
    const {searchValue, updateSearchVal} = React.useContext(TodoContext);

    return(
        <>
            <label htmlFor='searchBox' >{t.filter}</label>
            <input 
                type='text' id='searchBox' name='searchBox' 
                placeholder={t.filterPlaceholder} value={searchValue} 
                onChange={ (e)=>updateSearchVal(e.target.value.trim() ) }
                className='input'>
            </input>
        </>
    )
}

export default SearchInput;