import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CeateTodoButton';

const defaulttodos = [{ 'text': 'Cortar cebolla', 'completed': true}, { 'text': 'tomar curso de react', 'completed': false},
{ 'text': 'LLorar con la llorona', 'completed': false}];

function useLocalStorage(itemname, initialValue){
  const localStorageTodos = localStorage.getItem(itemname);
  let parsedItem;

  if(!localStorageTodos){
    localStorage.setItem(itemname, JSON.stringify(initialValue));
    parsedItem = [];
  }
  else{
    parsedItem = JSON.parse(localStorageTodos);
  }

  const[item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem)=>{
    let stringifieditem = JSON.stringify(newItem);
    localStorage.setItem(itemname , stringifieditem);
    setItem(newItem);

    return [item, saveItem];
  }
  
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1');
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

  

  const completeTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };
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
  );
}

export default App;
