import { applyMiddleware, bindActionCreators, compose, createStore, Dispatch } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

declare global {
  // tslint:disable-next-line interface-name
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const INITIAL_STATE = {
  app: {
    currentState: {},
  },
};

export function configureStore(initialState = INITIAL_STATE) {
  const inDevelopmentMode = process.env.NODE_ENV === 'development';

  let composeEnhancers = compose;
  if (inDevelopmentMode) {
    // add redux devtools support in browser
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const middlewares = [reduxThunk];

  return createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares)));
}

export function bindActions(actions: {}) {
  return (dispatch: Dispatch) => ({
    actions: { ...bindActionCreators(actions, dispatch) },
  });
}

export { INITIAL_STATE };
