import { initApiConnector } from 'Api/index'
import { logError } from 'Utils/log'
import { UNSUBSCRIBE_ENDPOINT } from '../../endpoints'

export const unsubscribe = async (community, user) => {
  try {
    user = { email: user.email }
    const apic = initApiConnector()
    const resp = await apic.post(UNSUBSCRIBE_ENDPOINT, { community, user })
    if (resp.status === 201) return resp.data
    return { error: resp.problem }
  } catch (err) {
    logError(err)
    return { error: err.message }
  }
}
