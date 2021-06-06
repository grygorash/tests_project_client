import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { CONFIRM_EMAIL_PATH } from 'routes/routePathes';
import { confirmEmail } from 'store/actions/authActions';

export default function() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  useEffect(() => {
    if (location.pathname === CONFIRM_EMAIL_PATH) {
      const email = query.get('email');

      if (email) {
        confirmEmail({ email });
      }
    }
  }, [location.pathname]);
}
