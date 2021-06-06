const API_URL = 'http://localhost:5000/';

export const API_URLS = {
  users: {
    getCurrentUserUrl: `${API_URL}api/users/current`,
  },
  auth: {
    loginUserUrl: `${API_URL}api/auth/login`,
    registerUserUrl: `${API_URL}api/auth/register`,
    confirmEmail: `${API_URL}api/auth/confirm-email`,
    forgotPassword: `${API_URL}api/auth/forgot-password`,
    resetPassword: `${API_URL}api/auth/reset-password`,
  },
};
