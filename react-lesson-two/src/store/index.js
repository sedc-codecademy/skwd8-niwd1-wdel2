import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// enable Redux DevTools to access our store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

export default createStore(
    // root reducer
    rootReducer,
    // initial state
    initialState,
    // apply the middleware
    composeEnhancers(
        applyMiddleware(thunk),
    )
);