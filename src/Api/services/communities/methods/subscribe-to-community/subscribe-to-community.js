import { initApiConnector } from 'Api/index'
import { logError } from 'Utils/log'
import { SUBSCRIBE_ENDPOINT } from '../../endpoints'

export const subscribeToCommunity = async ({ slug, desc, user }) => {
  try {
    user = { email: 'test@test.com', name: 'Testy Mctestface' } // todo sort users stuff
    const apic = initApiConnector()
    const resp = await apic.post(SUBSCRIBE_ENDPOINT, { slug, desc, user })
    if (resp.status === 201) return resp.data
    return { error: resp.problem }
  } catch (err) {
    logError(err)
    return { error: err.message }
  }
}
