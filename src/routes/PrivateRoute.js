import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { indexOf } from 'lodash';

import { getResolvedConditions } from 'store/selectors/userSelectors';

const PrivateRoute = ({ component: Component, conditions, redirects = [], ...rest }) => {
  const resolvedConditions = useSelector((state) => getResolvedConditions(state, conditions));
  const redirect = redirects[indexOf(resolvedConditions, false)];

  const render = (props) => !redirect
    ? <Component />
    : <Redirect to={{ pathname: redirect, state: { from: props.location } }} />;

  return (
    <Route {...rest} render={render} />
  );
};

export default PrivateRoute;
