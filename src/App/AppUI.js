import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CeateTodoButton';

function AppUI({todalTodos,
    completedTodos,
    searchValue,
    SearchSetState,
    newTodos,
    completeTodo,
    deleteTodo}){
    return(
        <>
    <TodoCounter
      total={todalTodos}
      completed={completedTodos}
    />
    <TodoSearch searchValue = {searchValue}
      SearchSetState = {SearchSetState}
    />
    <TodoList>
      {loading && <p>Estamos cargando, no desesperes</p>}
      {error && <p>Hubo un error</p>}
      {(!loading && !newTodos.length) && <p>Crea tu primer todo</p>}
      {newTodos.map(todo=>(<TodoItem 
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={()=> deleteTodo(todo.text)}
      />))}
    </TodoList>
    <CreateTodoButton/>
    </>
    )
}

export {AppUI};