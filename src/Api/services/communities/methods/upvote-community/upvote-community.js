import { initApiConnector } from 'Api/index';
import { logError } from 'Utils/log';
import { UPVOTE_ENDPOINT } from '../../endpoints';

export const upvoteCommunity = async ({ name, user }) => {
  try {
    const apic = initApiConnector();
    const resp = await apic.post(UPVOTE_ENDPOINT, { communityName: name, user: { email: 'test@test.com', name: 'Testy Mctestface' } });
    if (resp.ok) return resp.data;
    return { error: resp.problem };
  } catch (err) {
    logError(err);
    return { error: err.message };
  }
};
