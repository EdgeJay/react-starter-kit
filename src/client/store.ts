import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import { applyMiddleware, bindActionCreators, compose, createStore, Dispatch } from 'redux';
import reduxThunk from 'redux-thunk';
import { createRootReducer, IRootInitialState } from './reducers';

declare global {
  // tslint:disable-next-line interface-name
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export const INITIAL_STATE: IRootInitialState = {
  app: {
    sideMenu: {
      opened: false,
    },
  },
};

export const history = createHashHistory();

export function configureStore(initialState = INITIAL_STATE) {
  const inDevelopmentMode = process.env.NODE_ENV === 'development';

  let composeEnhancers = compose;
  if (inDevelopmentMode) {
    // add redux devtools support in browser
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const middlewares = [routerMiddleware(history), reduxThunk];

  return createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}

export function bindActions(actions: {}) {
  return (dispatch: Dispatch) => ({
    actions: { ...bindActionCreators(actions, dispatch) },
  });
}
