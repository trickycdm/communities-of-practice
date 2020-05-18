import { create } from 'apisauce';
const COOKIE_NAME = 'token=';
// define the api

export const v1Api = create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'x-user-token': getUserTokenFromCookie(),
  },
});

/**
 * Response Transform:
 * This is our hook into all responses from our Api. We can use this to ensure we get consistent data responses across our app.
 */
// v1Api.addResponseTransform(response => {})

/**
 * Export to allow unit testing
 * @returns {string}
 */
export function getUserTokenFromCookie() {
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(COOKIE_NAME) === 0) return c.substring(COOKIE_NAME.length, c.length);
  }
  return '';
}
