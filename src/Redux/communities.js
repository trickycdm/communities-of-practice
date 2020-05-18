import { createCommunity } from 'Api/services/communities/methods/create-community/create-community';
import { getAllCommunities } from '../Api/services/communities/methods/get-all-communities/get-all-communities';
import { subscribeToCommunity } from 'Api/services/communities/methods/subscribe-to-community/subscribe-to-community';
import { logError } from '../Utils/log';

const initialState = {};

const UPDATE_ALL_COMMUNITIES = 'communities/UPDATE_ALL_COMMUNITIES';
const ADD_COMMUNITY = 'communities/ADD_COMMUNITY';
const SUBSCRIBE_TO_COMMUNITY = 'communities/SUBSCRIBE_TO_COMMUNITY';

export const handleGetAllCommunitiesApiCall = () => {
  return async dispatch => {
    const resp = await getAllCommunities();
    console.log(resp)
    if (resp.error) return logError(resp.error);
    dispatch(addAllCommunitiesToState(resp));
  };
};

export const handleNewCommunityApiCall = (community) => {
  return async (dispatch) => {
    const resp = await createCommunity(community);
    if (resp.error) return logError(resp.error);
    dispatch(addCommunityToState(community));
  };
};

export const handleNewSubscribeApiCall = (community) => {
  return async (dispatch) => {
    const resp = await subscribeToCommunity(community);
    if (resp.error) logError(resp.error);
    dispatch(addUpvoteToState(community));
  };
};

export function addCommunityToState(community) {
  return { type: ADD_COMMUNITY, community };
}

export function addAllCommunitiesToState(communities) {
  return { type: UPDATE_ALL_COMMUNITIES, communities };
}

export function addUpvoteToState(community) {
  return { type: SUBSCRIBE_TO_COMMUNITY, community };
}

export default function CommunitiesReducer(state = initialState, action) {
  const { type, community, communities } = action;
  console.log(communities)
  switch (type) {
    case ADD_COMMUNITY: {
      return {
        ...state,
        [community.slug]: { ...community },
      };
    }
    case UPDATE_ALL_COMMUNITIES: {
      return {
        ...state,
        ...communities
      };
    }
    case SUBSCRIBE_TO_COMMUNITY: {
      return {
        ...state,
        [community.slug]: { ...community },
      };
    }
    default:
      return state;
  }
}
