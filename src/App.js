import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CeateTodoButton';

const todos = [{ 'text': 'Cortar cebolla', 'completed': false}, { 'text': 'tomar curso de react', 'completed': false},
{ 'text': 'LLorar con la llorona', 'completed': false}];

function App() {
  return (
    <>
    <TodoCounter/>
    <TodoSearch/>
    <TodoList>
      {todos.map(todo=>(<TodoItem/>))}
    </TodoList>
    <CreateTodoButton/>
    </>
  );
}

export default App;
