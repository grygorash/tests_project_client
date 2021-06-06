import { STUDENT, TEACHER } from 'utils/constants';

export const getPermissionByKey = { 1: TEACHER, 2: STUDENT };

export const getPermissionByName = { [TEACHER]: 1, [STUDENT]: 2 };
