/* eslint-disable import/prefer-default-export */

import { createStore, compose, applyMiddleware, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const INITIAL_STATE = {
  app: {
    currentState: null,
  },
  registry: {
    voters: [],
    votes: [],
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

  const middlewares = [thunk];

  return createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares)));
}

export function bindActions(actions) {
  return dispatch => ({
    actions: { ...bindActionCreators(actions, dispatch) },
  });
}

export { INITIAL_STATE };
