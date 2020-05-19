import { initApiConnector } from 'Api/index'
import { logError } from 'Utils/log'
import { CREATE_COMMUNITY_ENDPOINT } from '../../endpoints'

export const createCommunity = async ({ slug, name, desc }) => {
  try {
    const paramErrors = checkForCreateCommunityParamErrors({ slug, name, desc })
    if (paramErrors) return paramErrors
    const apic = initApiConnector()
    const resp = await apic.put(CREATE_COMMUNITY_ENDPOINT, { slug, name, desc })
    if (resp.status === 201) return resp.data
    return { error: resp.problem }
  } catch (err) {
    logError(err)
    return { error: err.message }
  }
}
export const checkForCreateCommunityParamErrors = ({ slug, name, desc }) => {
  let obj = { slug, name, desc }
  const errors = Object.keys(obj).reduce((acc, key) => {
    if (!obj[key]) return [...acc, `${key}`]
    return [...acc]
  }, []).filter(item => item)
  return errors.length ? { error: `Invalid params: ${errors.join(', ')}` } : null
}

