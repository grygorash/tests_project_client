import { request } from 'api/request';
import { API_URLS } from 'api/constants';

export default class Users {
  static getCurrentUserApi() {
    return request({
      url: API_URLS.users.getCurrentUserUrl,
    });
  }
}
