import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import ErrorBoundary from 'react-error-boundary';
import loadPlugins from './plugins';
import AppContainer from './components/app-container';
import theme from './lib/theme';
import '@blueprintjs/core/lib/css/blueprint.css';
import FallBack from './components/error-boundary';
import '@blueprintjs/select/lib/css/blueprint-select.css';

const App = ({store, persistor}) => (
  <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ErrorBoundary FallbackComponent={FallBack}>
          <AppContainer />
        </ErrorBoundary>
      </Provider>
    </ThemeProvider>
  </PersistGate>
);

export default loadPlugins(App);
