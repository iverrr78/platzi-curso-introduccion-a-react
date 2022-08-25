import React from "react";


function TodoItem(props){
    /*const onComplete = ()=>{
        alert('ya completaste el todo ' + props.text);
    }
    const onDelete = ()=>{
        alert('Se borro el todo ' + props.text);
    }*/
    return(
        <li>
            <span onClick={props.onComplete}>v</span>
            <p>{props.text}</p>
            <span onClick={props.onDelete}>x</span>
        </li>

    )
}

export {TodoItem};