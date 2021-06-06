import { Provider } from 'react-redux';

import AppInner from 'AppInner';
import configureStore from 'store/configureStore';

export const store = configureStore();

const App = () =>
  <Provider store={store}>
    <AppInner />
  </Provider>;

export default App;
