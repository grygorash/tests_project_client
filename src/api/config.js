export const maxRetry = 3;
export const retryDelay = 300;
export const retryTimeout = 1000 * 60 * 5; // 5 minutes;
export const uploadTimeout = 1000 * 60 * 10; // 10 minutes;

export const networkParams = {
  baseURL: '/',
  timeout: retryTimeout,
};
