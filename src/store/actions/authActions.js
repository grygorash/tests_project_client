import Auth from 'api/classes/Auth';
import { setCookie } from 'utils/cookies';
import { USER_TOKEN } from 'utils/constants';
import { SET_CURRENT_USER } from 'store/actions/usersActions';
import sendNotification from 'utils/sendNotification';

export const loginUserAction = (values) => async(dispatch) => {
  const { success, data, errors } = await Auth.loginUser(values);

  if (success) {
    const { user, token } = data;

    setCookie(USER_TOKEN, token);
    dispatch({ type: SET_CURRENT_USER, payload: { isLoading: false, user, isAuthenticated: true } });
  } else {
    if (errors?.message) {
      sendNotification('error', errors?.message.toString());
    }
  }

  return errors;
};

export const registerUserAction = async(values) => {
  const { success, data, errors } = await Auth.registerUser(values);

  if (success) {
    sendNotification('success', data?.message);
  } else {
    if (errors?.message) {
      sendNotification('error', errors?.message.toString());
    }
  }

  return errors;
};

export const confirmEmail = async(values) => {
  const { success, data, errors } = await Auth.confirmEmail(values);
  const notification = success ? ['success', data?.message] : ['error', errors?.message.toString()];

  sendNotification(...notification);
};

export const forgotPasswordAction = async(values) => {
  const { success, data, errors } = await Auth.forgotPassword(values);

  if (success) {
    sendNotification('success', data?.message);
  } else {
    if (errors?.message) {
      sendNotification('error', errors?.message.toString());
    }
  }

  return errors;
};

export const resetPasswordAction = async(values) => {
  const { success, data, errors } = await Auth.resetPassword(values);

  if (success) {
    sendNotification('success', data?.message);
  } else {
    if (errors?.message) {
      sendNotification('error', errors?.message.toString());
    }
  }

  return errors;
};
