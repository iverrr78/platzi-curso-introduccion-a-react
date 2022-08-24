import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CeateTodoButton';

const defaulttodos = [{ 'text': 'Cortar cebolla', 'completed': true}, { 'text': 'tomar curso de react', 'completed': false},
{ 'text': 'LLorar con la llorona', 'completed': false}];

function App() {
  const[todos, setTodos] = React.useState(defaulttodos);
  const [searchValue, SearchSetState] = React.useState('');
  
  const completedTodos = todos.filter(todo=>todo.completed).length;
  const todalTodos = todos.length;

  let newTodos = [];

  if(searchValue.length == 0){
    newTodos = todos;
  }
  else{
    newTodos = todos.filter(todo=>todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    console.log(newTodos);
  }
  return (
    <>
    <TodoCounter
      total={todalTodos}
      completed={completedTodos}
    />
    <TodoSearch searchValue = {searchValue}
      SearchSetState = {SearchSetState}
    />
    <TodoList>
      {newTodos.map(todo=>(<TodoItem/>))}
    </TodoList>
    <CreateTodoButton/>
    </>
  );
}

export default App;
