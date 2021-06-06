import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentUserAction } from 'store/actions/usersActions';

export default function useCurrentUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserAction());
  }, []);
}
