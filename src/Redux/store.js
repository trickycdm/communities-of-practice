import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import user from './user';
import communities from './communities';
import meta from './meta';

const reducers = combineReducers({
  user,
  communities,
  meta,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);
