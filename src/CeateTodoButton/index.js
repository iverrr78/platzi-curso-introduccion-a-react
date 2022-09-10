import React from "react";

function CreateTodoButton(){
    const onClickButton = (msg)=>{
        alert(msg);
    }
    return(
        <button
        onClick={()=>onClickButton('aqui se deberia abrir el modal')}>
            Europe
        </button>
    )
}

export {CreateTodoButton};