const initialState = {
  createTicket: {
    subject: null,
    content: null
  },
  resolveTicket: {
    subject: null,
    content: null
  },
  updateTicket: {
    subject: null,
    content: null
  },
  activeDropDownOption: null
}

/*
 * Types
 */
const UPDATE = 'EmailManagement/UPDATE'
const SET_ACTIVE_EDITOR = 'EmailManagement/SET_ACTIVE_EDITOR'

/*
 * Actions
 */
export function setActiveDropDownOption (selection) {
  return { type: SET_ACTIVE_EDITOR, activeDropDownOption: selection }
}

export function update (email) {
  return { type: UPDATE, email }
}

/*
 * Reducer
 */
export default function EmailManagementReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE: {
      return {
        ...state,
        [action.email.email_id]: { ...action.email }
      }
    }
    case SET_ACTIVE_EDITOR: {
      return {
        ...state,
        activeDropDownOption: action.activeDropDownOption
      }
    }
    default:
      return state
  }
}
