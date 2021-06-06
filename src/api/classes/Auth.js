import { request } from 'api/request';
import { API_URLS } from 'api/constants';

export default class Auth {
  static loginUser(data) {
    return request({
      method: 'post',
      url: API_URLS.auth.loginUserUrl,
      data,
    });
  }

  static registerUser(data) {
    return request({
      method: 'post',
      url: API_URLS.auth.registerUserUrl,
      data,
    });
  }

  static confirmEmail(data) {
    return request({
      method: 'post',
      url: API_URLS.auth.confirmEmail,
      data,
    });
  }

  static forgotPassword(data) {
    return request({
      method: 'post',
      url: API_URLS.auth.forgotPassword,
      data,
    });
  }

  static resetPassword(data) {
    return request({
      method: 'post',
      url: API_URLS.auth.resetPassword,
      data,
    });
  }
}
