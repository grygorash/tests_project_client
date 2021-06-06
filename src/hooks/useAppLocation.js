import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { reduce } from 'lodash';

import routesConfig from 'routes/routesConfig';

const getDocumentTitle = reduce(routesConfig, (acc, { title, path }) => ({ ...acc, [path]: title }), {});

export default function useAppLocation() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = getDocumentTitle[pathname];
  }, [pathname]);
}
