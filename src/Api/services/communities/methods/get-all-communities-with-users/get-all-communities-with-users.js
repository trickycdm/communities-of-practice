import { initApiConnector } from 'Api/index';
import { logError } from 'Utils/log';
import { GET_ALL_COMMUNITIES_WITH_USERS_ENDPOINT } from '../../../endpoints';

export const getAllCommunitiesWithUsers = async () => {
  try {
    const apic = initApiConnector();
    const resp = await apic.get(GET_ALL_COMMUNITIES_WITH_USERS_ENDPOINT);
    if (resp.ok) return resp.data;
    return { error: resp.problem };
  } catch (err) {
    logError(err);
    return { error: err.message };
  }
};
