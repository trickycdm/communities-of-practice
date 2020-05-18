import { createCommunity } from 'Api/services/communities/methods/create-community/create-community';
import { subscribeToCommunity } from 'Api/services/communities/methods/subscribe-to-community/subscribe-to-community';
import { logError } from '../Utils/log';

const initialState = {
  javascript: {
    id: 'javascript',
    name: 'Javascript',
    desc: 'All things JavaScript, not just limited to React!',
    subscribers: 16,
  },
  java: {
    id: 'java',
    name: 'Java',
    desc: 'All the cool stuff Java offers!',
    subscribers: 23,
  },
};

const ADD_COMMUNITY = 'communities/ADD_COMMUNITY';
const UPVOTE_COMMUNITY = 'communities/UPVOTE_COMMUNITY';

export const handleNewCommunityApiCall = (community) => {
  return async (dispatch) => {
    const resp = await createCommunity(community);
    if (resp.error) return logError(resp.error);
    dispatch(addCommunityToState(community));
  };
};

export const handleNewUpvoteApiCall = (community) => {
  return async (dispatch) => {
    const resp = await subscribeToCommunity(community);
    if (resp.error) logError(resp.error);
    dispatch(addUpvoteToState(community));
  };
};

export function addCommunityToState(community) {
  return { type: ADD_COMMUNITY, community };
}

export function addUpvoteToState(community) {
  return { type: UPVOTE_COMMUNITY, community };
}

export default function CommunitiesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMUNITY: {
      return {
        ...state,
        [action.community.id]: { ...action.community },
      };
    }
    case UPVOTE_COMMUNITY: {
      console.log(action);
      return {
        ...state,
        [action.community.id]: { ...action.community },
      };
    }
    default:
      return state;
  }
}
