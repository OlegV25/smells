import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store, { history } from '@/redux/configureStore';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';
import Routes from '@/routes';
import '@/assets/styles/main.scss';

const Root = props => (
  <Provider store={store}>
    <Router history={history}>
      {
        props.children // eslint-disable-line react/prop-types
      }
    </Router>
  </Provider>
)

render(
  process.env.NODE_ENV === 'development' ? (
    <AppContainer errorReporter={Redbox}>
      <Root>
        <Routes />
      </Root>
    </AppContainer>
  ) : (
    <Root>
      <Routes />
    </Root>
  ),
  document.getElementById('root'),
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('@/routes', () => {
    // eslint-disable-next-line global-require
    const NewRoutes = require('@/routes').default

    render(
      <AppContainer errorReporter={Redbox}>
        <Root>
          <NewRoutes />
        </Root>
      </AppContainer>,
      document.getElementById('root'),
    );
  })

  module.hot.accept('@/redux/configureStore');
}
