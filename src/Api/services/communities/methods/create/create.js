import { initApiConnector } from 'Api/index'
import { logError } from 'Utils/log'
import { CREATE_COMMUNITY_ENDPOINT } from '../../endpoints'

export const create = async ({ slug, name, description }) => {
  try {
    const paramErrors = checkForCreateCommunityParamErrors({ slug, name, description })
    if (paramErrors) return paramErrors
    const apic = initApiConnector()
    const resp = await apic.put(CREATE_COMMUNITY_ENDPOINT, { slug, name, description })
    if (resp.status === 201) return resp.data
    return { error: resp.problem }
  } catch (err) {
    logError(err)
    return { error: err.message }
  }
}
export const checkForCreateCommunityParamErrors = ({ slug, name, description }) => {
  let obj = { slug, name, description }
  const errors = Object.keys(obj).reduce((acc, key) => {
    if (!obj[key]) return [...acc, `${key}`]
    return [...acc]
  }, []).filter(item => item)
  return errors.length ? { error: `Invalid params: ${errors.join(', ')}` } : null
}

