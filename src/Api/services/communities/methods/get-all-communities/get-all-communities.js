import { initApiConnector } from 'Api/index';
import { logError } from 'Utils/log';
import { transformCommunityArray } from './get-all-communities-transform';
import { GET_ALL_COMMUNITIES_ENDPOINT } from '../../endpoints';

export const getAllCommunities = async () => {
  try {
    const apic = initApiConnector();
    const resp = await apic.get(GET_ALL_COMMUNITIES_ENDPOINT);
    if (resp.ok) return transformCommunityArray(resp.data);
    return { error: resp.problem };
  } catch (err) {
    logError(err);
    return { error: err.message };
  }
};
