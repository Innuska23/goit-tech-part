import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';

import { globalStyle } from './GlobalStyle.jsx';

import { persistor, store } from './redux/store.js';
import { Routes } from './components/router/index.js';

import { theme } from './constants';
import { AppContainer } from './App.styled.jsx';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyle} />

          <AppContainer>
            <Routes />
          </AppContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
