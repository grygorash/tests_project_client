import Users from 'api/classes/Users';
import { removeCookie } from 'utils/cookies';
import { USER_TOKEN } from 'utils/constants';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const getCurrentUserAction = () => async(dispatch) => {
  const { success, data } = await Users.getCurrentUserApi();

  if (success) {
    dispatch({ type: SET_CURRENT_USER, payload: { isLoading: false, user: data, isAuthenticated: true } });
  } else {
    dispatch({ type: SET_CURRENT_USER, payload: { isLoading: false } });
    removeCookie(USER_TOKEN);
  }
};
