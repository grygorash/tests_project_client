import axios from 'axios';
import qs from 'qs';

import { convertKeysToCamelCaseDeeply, convertKeysToSnakeCaseDeeply } from 'utils/deepMapKeys';
import { networkParams } from 'api/config';
import { getCookie } from 'utils/cookies';
import { USER_TOKEN } from 'utils/constants';

const engineAPI = axios.create({
  ...networkParams,
  paramsSerializer: (params) => qs.stringify(params, { indices: false }),
  transformRequest: [
    (data) => data && convertKeysToSnakeCaseDeeply(data),
    ...axios.defaults.transformRequest,
  ],
  transformResponse: [
    (data) => convertKeysToCamelCaseDeeply(JSON.parse(data)),
    ...axios.defaults.transformResponse,
  ],
});

export const setAuthorization = (data = {}) => {
  if (!data.token) {
    delete engineAPI.defaults.headers.common.Authorization;
  } else {
    engineAPI.defaults.headers.common.Authorization = `Bearer ${data.token}`;
  }

  return data.token;
};

engineAPI.interceptors.response.use(
  (response) => response,
  (error) => error,
);

engineAPI.interceptors.request.use((config) => {
  const token = getCookie(USER_TOKEN);

  if (token) {
    return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
  }

  return config;
});

export { engineAPI };
