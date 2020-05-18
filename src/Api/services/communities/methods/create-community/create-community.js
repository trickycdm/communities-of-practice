import { initApiConnector } from 'Api/index';
import { logError } from 'Utils/log';
import { CREATE_COMMUNITY_ENDPOINT } from '../../endpoints';

export const createCommunity = async (community) => {
  try {
    const apic = initApiConnector();
    const resp = await apic.put(CREATE_COMMUNITY_ENDPOINT, community);
    if (resp.ok) return resp.data;
    return { error: resp.problem };
  } catch (err) {
    logError(err);
    return { error: err.message };
  }
};
