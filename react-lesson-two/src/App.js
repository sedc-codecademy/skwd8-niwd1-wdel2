import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import { useSelector } from 'react-redux';

export default function App() {
  
  const todosList = useSelector(
    state => state.todos.list
  );

  const todosItems = todosList.map(
    item => (<TodoItem todo={item} />)
  );

  return (
    <>
      <h1>Todo App</h1>
      <div>
        {todosItems}
      </div>
      <TodoForm/>
    </>
  );
}