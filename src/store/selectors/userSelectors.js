import { isArray, map } from 'lodash';
import { createSelector } from 'reselect';

export const getIsAuthenticated = ({ user }) => user.isAuthenticated;

export const getIsLoadingUser = ({ user }) => user.isLoading;

export const getResolvedConditions = createSelector(
  [(state, conditions) => ({ state, conditions })],
  ({ state, conditions }) => isArray(conditions) ? map(conditions, (condition) => condition(state)) : [],
);
