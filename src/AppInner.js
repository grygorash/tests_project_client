import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes/Routes';
import GlobalSpinner from 'components/GlobalSpinner/GlobalSpinner';
import useCurrentUser from 'hooks/useCurrentUser';
import { getIsLoadingUser } from 'store/selectors/userSelectors';
import history from 'utils/history';
import { GlobalStyle, theme } from 'ThemeStyles';

const AppInner = () => {
  const isLoading = useSelector(getIsLoadingUser);

  useCurrentUser();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router history={history}>{isLoading ? <GlobalSpinner /> : <Routes />}</Router>
    </ThemeProvider>
  );
};

export default AppInner;
