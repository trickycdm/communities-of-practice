import { initApiConnector } from 'Api/index';
import { logError } from 'Utils/log';
import { SUBSCRIBE_ENDPOINT } from '../../endpoints';

export const subscribeToCommunity = async ({ slug, user }) => {
  try {
    const apic = initApiConnector();
    const resp = await apic.post(SUBSCRIBE_ENDPOINT, { slug, user: { email: 'test@test.com', name: 'Testy Mctestface' } });
    if (resp.ok) return resp.data;
    return { error: resp.problem };
  } catch (err) {
    logError(err);
    return { error: err.message };
  }
};
