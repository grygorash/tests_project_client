import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from 'routes/PrivateRoute';
import GlobalSpinner from 'components/GlobalSpinner/GlobalSpinner';
import useAppLocation from 'hooks/useAppLocation';
import routesConfig from 'routes/routesConfig';
import { HOME_PATH } from 'routes/routePathes';
import useCallbackListener from 'hooks/useCallbackListener';

const Routes = () => {
  useAppLocation();
  useCallbackListener();

  return (
    <Suspense fallback={<GlobalSpinner />}>
      <Switch>
        {routesConfig.map((route, index) => route.conditions
          ? <PrivateRoute key={index} {...route} />
          : <Route key={index} {...route} />)}
        <Redirect from="*" to={HOME_PATH} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
