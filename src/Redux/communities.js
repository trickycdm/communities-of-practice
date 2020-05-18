const initialState = {
  communities: [{
    name: 'web',
    desc: 'desc'
  }]
}

const ADD_COMMUNITY = 'communities/ADD_COMMUNITY'

export function addCommunity (community) {
  return { type: ADD_COMMUNITY, community }
}

export default function CommunitiesReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_COMMUNITY: {
      return {
        ...state,
        communities: [
          ...state.communities,
          action.community
        ]
      }
    }
    default:
      return state
  }
}
