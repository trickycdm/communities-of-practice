const initialState = {}

const UPDATE_ALL_COMMUNITIES = 'communities/UPDATE_ALL_COMMUNITIES'
const ADD_COMMUNITY = 'communities/ADD_COMMUNITY'

export const addCommunityToState = community => ({ type: ADD_COMMUNITY, community, apiSuccessMessage: 'Community Added' })

export const addAllCommunitiesToState = communities => ({ type: UPDATE_ALL_COMMUNITIES, communities })

export default function CommunitiesReducer(state = initialState, action) {
  const { type, community, communities } = action
  switch (type) {
    case ADD_COMMUNITY: {
      return {
        ...state,
        [community.slug]: { ...community },
      }
    }
    case UPDATE_ALL_COMMUNITIES: {
      return {
        ...state,
        ...communities
      }
    }
    default:
      return state
  }
}
