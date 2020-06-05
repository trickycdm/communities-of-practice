import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import user from './user'
import communities from './communities'
import meta from './meta'

const reducers = combineReducers({
  user,
  communities,
  meta
})

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    devTools
  )
)
