import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import configureStore from '../../modules/core/store';
import Routes from './Routes';

const theme = {
  primaryColor: '1d2d50',
  secondaryColor: '133b5c',
  backgroundColor: 'fcdab7'
}


function App() {
  const store = configureStore({ navigation: { currentPage: 'HOME-PAGE' }});
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ ...theme }}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
