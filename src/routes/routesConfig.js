import { lazy } from 'react';
import { negate } from 'lodash';

import { importRetry } from 'utils/dynamicImport';
import { getIsAuthenticated } from 'store/selectors/userSelectors';
import {
  CONFIRM_EMAIL_PATH,
  FORGOT_PASSWORD_PATH,
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  RESET_PASSWORD_PATH,
} from 'routes/routePathes';

const imports = {
  home: () => import('routes/Home/Home'),
  login: () => import('routes/Login/Login'),
  register: () => import('routes/Register/Register'),
  forgotPassword: () => import('routes/ForgotPassword/ForgotPassword'),
  resetPassword: () => import('routes/ResetPassword/ResetPassword'),
};

const isAuthenticatedRedirects = {
  conditions: [getIsAuthenticated],
  redirects: [LOGIN_PATH],
};

const isNotAuthenticatedRedirects = {
  conditions: [negate(getIsAuthenticated)],
  redirects: [HOME_PATH],
};

const routesConfig = [
  {
    title: 'Увійти',
    path: LOGIN_PATH,
    exact: true,
    ...isNotAuthenticatedRedirects,
    component: lazy(() => importRetry(imports.login)),
  },
  {
    title: 'Зареєструватися',
    path: REGISTER_PATH,
    exact: true,
    ...isNotAuthenticatedRedirects,
    component: lazy(() => importRetry(imports.register)),
  },
  {
    title: 'Відновлення паролю',
    path: FORGOT_PASSWORD_PATH,
    exact: true,
    ...isNotAuthenticatedRedirects,
    component: lazy(() => importRetry(imports.forgotPassword)),
  },
  {
    title: 'Відновлення паролю',
    path: RESET_PASSWORD_PATH,
    ...isNotAuthenticatedRedirects,
    component: lazy(() => importRetry(imports.resetPassword)),
  },
  {
    title: '',
    path: CONFIRM_EMAIL_PATH,
    conditions: [() => false],
    redirects: [LOGIN_PATH],
  },
  {
    title: 'Головна',
    path: HOME_PATH,
    exact: true,
    ...isAuthenticatedRedirects,
    component: lazy(() => importRetry(imports.home)),
  },
];

export default routesConfig;
