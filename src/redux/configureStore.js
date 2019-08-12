import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import rootReducer from '@/redux/reducers';

export const history = createBrowserHistory()

const store = createStore(rootReducer, applyMiddleware(logger));

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('@/redux/reducers', () => {
    // eslint-disable-next-line global-require
    const nextReducer = require('@/redux/reducers').default

    store.replaceReducer(nextReducer);
  });
}

export default store
