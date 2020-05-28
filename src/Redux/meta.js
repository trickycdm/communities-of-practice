const initialState = {
  showAllCommunities: true
}

const TOGGLE_COMMUNITIES_VIEW = 'communities/TOGGLE_COMMUNITIES_VIEW'

export const toggleCommunitiesView = () => ({ type: TOGGLE_COMMUNITIES_VIEW })

export default function metaReducer(state = initialState, action) {
  const { type } = action
  switch (type) {
    case TOGGLE_COMMUNITIES_VIEW: {
      return {
        ...state,
        showAllCommunities: !state.showAllCommunities
      }
    }
    default:
      return state
  }
}
