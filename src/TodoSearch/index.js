import React from 'react';

function TodoSearch({searchValue, SearchSetState}){
    const onSearch = (event)=>{
        console.log(event.target.value);
        SearchSetState(event.target.value);
    }
    return(
        <input placeholder='Cebolla'
        value={searchValue}
        onChange={onSearch}></input>
    )
}

export {TodoSearch};