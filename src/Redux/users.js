const initialState = {
  user: null
}

/*
 * Types
 */
const SET_ACTIVE_USER = 'Users/SET_ACTIVE_USER'
const REMOVE_ACTIVE_USER = 'Users/REMOVE_ACTIVE_USER'

/*
 * Actions
 */
export function setActiveUser (user) {
  return { type: SET_ACTIVE_USER, user }
}

export function removeActiveUser () {
  return { type: REMOVE_ACTIVE_USER }
}

/*
 * Reducer
 */
export default function UsersReducer (state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_USER: {
      return {
        ...state,
        user: { ...action.user }
      }
    }
    case REMOVE_ACTIVE_USER: {
      return {
        ...state,
        user: null
      }
    }
    default:
      return state
  }
}
