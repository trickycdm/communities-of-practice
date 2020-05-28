export const communitiesInitialState = {
  communitiesApiLoading: false,
  communitiesApiSuccess: false,
  communitiesApiError: false,
  subscriptionsApiLoading: false,
  subscriptionsApiSuccess: false,
  subscriptionsApiError: false,
}

export const COMMUNITIES_API_LOADING = 'communities/COMMUNITIES_API_LOADING'
export const COMMUNITIES_API_SUCCESS = 'communities/COMMUNITIES_API_SUCCESS'
export const COMMUNITIES_API_ERROR = 'communities/COMMUNITIES_API_ERROR'
export const SUBSCRIPTIONS_API_LOADING = 'communities/SUBSCRIPTIONS_API_LOADING'
export const SUBSCRIPTIONS_API_SUCCESS = 'communities/SUBSCRIPTIONS_API_SUCCESS'
export const SUBSCRIPTIONS_API_ERROR = 'communities/SUBSCRIPTIONS_API_ERROR'
export const GENERAL_ERROR = 'communities/GENERAL_ERROR'

export const communitiesReducer = (state, action) => {
  const { type, errorMessage } = action
  switch (type) {
    case COMMUNITIES_API_LOADING: {
      return {
        ...state,
        communitiesApiLoading: true,
        communitiesApiSuccess: false,
        communitiesApiError: false,
      }
    }
    case COMMUNITIES_API_SUCCESS: {
      return {
        ...state,
        communitiesApiLoading: false,
        communitiesApiSuccess: true,
        communitiesApiError: false,
      }
    }
    case COMMUNITIES_API_ERROR: {
      return {
        ...state,
        communitiesApiLoading: false,
        communitiesApiSuccess: false,
        communitiesApiError: errorMessage,
      }
    }
    case SUBSCRIPTIONS_API_LOADING: {
      return {
        ...state,
        subscriptionsApiLoading: true,
        subscriptionsApiSuccess: false,
        subscriptionsApiError: false,
      }
    }
    case SUBSCRIPTIONS_API_SUCCESS: {
      return {
        ...state,
        subscriptionsApiLoading: false,
        subscriptionsApiSuccess: true,
        subscriptionsApiError: false,
      }
    }
    case SUBSCRIPTIONS_API_ERROR: {
      return {
        ...state,
        subscriptionsApiLoading: false,
        subscriptionsApiSuccess: false,
        subscriptionsApiError: errorMessage,
      }
    }
    case GENERAL_ERROR: {
      return {
        ...state,
        communitiesApiLoading: false,
        communitiesApiSuccess: false,
        communitiesApiError: false,
        subscriptionsApiLoading: false,
        subscriptionsApiSuccess: false,
        subscriptionsApiError: false,
        generalError: errorMessage
      }
    }
    default:
      return state
  }
}
