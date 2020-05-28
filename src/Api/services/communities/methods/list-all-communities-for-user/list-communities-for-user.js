import { initApiConnector } from 'Api/index'
import { logError } from 'Utils/log'
import { LIST_COMMUNITIES_FOR_USER_ENDPOINT } from '../../endpoints'

export const listCommunitiesForUser = async email => {
  try {
    const apic = initApiConnector()
    const resp = await apic.get(LIST_COMMUNITIES_FOR_USER_ENDPOINT, { email } )
    if (resp.ok) return resp.data
    return { error: resp.problem }
  } catch (err) {
    logError(err)
    return { error: err.message }
  }
}
