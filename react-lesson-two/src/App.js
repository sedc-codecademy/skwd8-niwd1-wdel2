import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

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

      <Switch>

        <Route path="/login">
          Login form
        </Route>

        <Route path="/todos">
          <div>
            {todosItems}
          </div>
          <TodoForm/>
        </Route>

        <Route path="/">
          Welcome!
        </Route>

      </Switch>
    </>
  );
}