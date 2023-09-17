import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';

import { globalStyle } from './GlobalStyle.jsx';

import { store } from './redux/store.js';
import { Routes } from './components/router/index.js';

import { theme } from './constants';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />

        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
