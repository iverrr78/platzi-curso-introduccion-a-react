import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

const defaulttodos = [{ 'text': 'Cortar cebolla', 'completed': true}, { 'text': 'tomar curso de react', 'completed': false},
{ 'text': 'LLorar con la llorona', 'completed': false}];

function useLocalStorage(itemname, initialValue){
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(()=>{
    setTimeout(()=>{
    try{
      const localStorageTodos = localStorage.getItem(itemname);
    let parsedItem;

    if(!localStorageTodos){
      localStorage.setItem(itemname, JSON.stringify(initialValue));
      parsedItem = [];
    }
    else{
      parsedItem = JSON.parse(localStorageTodos);
    }
    
    setItem(parsedItem);
    setLoading(false);
  }catch(error){
    setError(error);
  }
      },1000)
  })
  
  const saveItem = (newItem)=>{
    try{
    let stringifieditem = JSON.stringify(newItem);
    localStorage.setItem(itemname , stringifieditem);
    setItem(newItem);
    }catch(error){
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
  
}

function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
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

  React.useEffect(()=>{
    console.log('use effect');
  },[todalTodos]);

  return (
    <AppUI todalTodos={todalTodos}
      completedTodos={completedTodos}
      searchValue = {searchValue}
      SearchSetState = {SearchSetState}
      newTodos = {newTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
