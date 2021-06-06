import 'wdyr';
import 'dotenv/config';
import { render } from 'react-dom';

import App from 'App';
import 'assets/styles/main.scss';

const renderApp = () => render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('App', renderApp);
}

renderApp();
