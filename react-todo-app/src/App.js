import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function App() {

  const loggedIn = useSelector(state => state.auth.loggedIn);

  return (
    <Switch>
      <Route path="/login">
        Login
      </Route>
      <Route path="/register">
        Register
      </Route>
      <Route path="/todos">
        {
          loggedIn
          ? 'Todos!'
          : <Redirect to="/login"/>
        }
      </Route>
      <Route path="/">
        <Redirect to="/todos"/>
      </Route>
    </Switch>
  );
}