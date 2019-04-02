import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import app, { IAppInitialState } from './app';

export interface IRootInitialState {
  app: IAppInitialState;
}

export { IAppInitialState };

export function createRootReducer(history: History) {
  return combineReducers({
    app,
    router: connectRouter(history),
  });
}
