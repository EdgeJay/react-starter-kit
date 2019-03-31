import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import app from './app';

export function createRootReducer(history: History) {
  return combineReducers({
    app,
    router: connectRouter(history),
  });
}
