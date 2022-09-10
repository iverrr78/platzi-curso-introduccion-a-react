import React from 'react';

function TodoCounter({total, completed}){
    return(
        <h2>Has completado {completed} de {total} todos</h2>
    )
}

export {TodoCounter};