const initialState = {
  email: null,
  name: null
}

const SET_USER = 'Users/SET_USER'
const UNSET_USER = 'Users/UNSET_USER'

export const setActiveUser = user => ({ type: SET_USER, user })
export const unsetActiveUser = () => ({ type: UNSET_USER })

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        ...action.user,
      }
    }
    case UNSET_USER: {
      return initialState
    }
    default:
      return state
  }
}
