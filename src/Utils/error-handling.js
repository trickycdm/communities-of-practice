import { logError } from './log'

export const handleApiErrorResp = (resp, callback) => {
  return async dispatch => {
    logError(resp.error)
    dispatch(callback(resp.error))
  }
}
