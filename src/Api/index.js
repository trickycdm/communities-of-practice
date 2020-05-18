import { create } from 'apisauce';

export const initApiConnector = () => {
  return create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
  });
};
