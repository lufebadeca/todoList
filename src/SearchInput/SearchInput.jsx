import React from "react";

const SearchInput = ({searchValue, updateSearchVal}) =>{

    const updateText = (e) =>{
        const newVal = e.target.value;
        updateSearchVal(newVal);
    }

    return(
        <>
        <label htmlFor='searchBox' className='text-muted' >Search</label>
          <input type='text' id='searchBox' name='searchBox' placeholder="New task" value={searchValue} onChange={updateText} className='input'></input>
        </>
    )
}

export default SearchInput;