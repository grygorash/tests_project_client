import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'store/reducers';

export default function configureStore(preloadedState = {}) {
  const isDev = process.env.NODE_ENV === 'development';
  const devtools = isDev ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
  const middleware = devtools(applyMiddleware(thunk));
  const store = createStore(rootReducer, preloadedState, middleware);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
