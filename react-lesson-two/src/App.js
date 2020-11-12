import { useState } from "react";
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

export default function App() {
  
  // create a state
  const [todos, setTodos] = useState([
    {text: 'Buy milk', done: false},
    {text: 'Buy bread', done: false},
    {text: 'Buy socks', done: false},
  ]);

  // map todos to TodoItem component for rendering
  const mappedTodos = todos.map(
    (todo, idx) => (
      <TodoItem
        key={idx}
        todo={todo}
        deleteItem={() => removeTodo(todo)}
        toggleItem={() => toggleTodo(todo)}
      />
    )
  );

  // helper function to remove a component
  const removeTodo = (todoToRemove) => {
    const filteredArray = todos.filter(todo => todo !== todoToRemove);
    setTodos([...filteredArray]);
  };

  // helper function to add a component
  const addTodo = (newTodoText) => {
    setTodos([
      ...todos,
      {
        done: false,
        text: newTodoText,
      }
    ]);
  };

  const toggleTodo = (todoToToggle) => {
    const newArray = todos.map(todo => {
      if (todo === todoToToggle) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos([...newArray]);
  }

  return (
    <>
      <h1>Todo App</h1>
      <div>
        {mappedTodos}
      </div>
      <TodoForm addTodoCallback={(todoText) => addTodo(todoText)}
      />
    </>
  );
}