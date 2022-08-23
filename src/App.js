import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CeateTodoButton';

const todos = [{ 'text': 'Cortar cebolla', 'completed': false}, { 'text': 'tomar curso de react', 'completed': false},
{ 'text': 'LLorar con la llorona', 'completed': false}];

function App() {
  const [searchValue, SearchSetState] = React.useState('');
  
  return (
    <>
    <TodoCounter/>
    <TodoSearch searchValue = {searchValue}
      SearchSetState = {SearchSetState}
    />
    <TodoList>
      {todos.map(todo=>(<TodoItem/>))}
    </TodoList>
    <CreateTodoButton/>
    </>
  );
}

export default App;
