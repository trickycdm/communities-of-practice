import { initApiConnector } from 'Api/index';
import { logError } from 'Utils/log';
import { DELETE_COMMUNITY_ENDPOINT } from '../../endpoints';

export const deleteCommunity = async (communityName) => {
  try {
    const apic = initApiConnector();
    const resp = await apic.delete(DELETE_COMMUNITY_ENDPOINT, communityName);
    if (resp.ok) return resp.data;
    return { error: resp.problem };
  } catch (err) {
    logError(err);
    return { error: err.message };
  }
};
