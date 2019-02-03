import { v1Api } from 'Libs/api/api'

/**
 * Expect a rtetutn object of {user: {id, name}}
 * @param username
 * @param pw
 * @returns {Promise<*>}
 */
export async function authenticateUser (username, pw) {
  const endpoint = `/api/v1/users/authenticate`
  const resp = await v1Api.post(endpoint, { username, pw })
  if (resp.ok) return resp.data
  else {
    console.error(resp.problem)
    return { user: null }
  }
}
