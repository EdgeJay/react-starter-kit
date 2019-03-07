import { combineReducers } from 'redux';
import app from './app';
import registry from './registry';

export default combineReducers({
  app,
  registry,
});
