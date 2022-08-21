import React from 'react';

function TodoSearch(){
    const onSearch = (event)=>{
        console.log(event.target.value);
    }
    return(
        <input placeholder='Cebolla'
        onChange={onSearch}></input>
    )
}

export {TodoSearch};