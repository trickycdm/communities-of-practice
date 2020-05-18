import { createStore, combineReducers } from 'redux'
import users from './users'
import communities from './communities'

const reducers = combineReducers({
  users,
  communities
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
