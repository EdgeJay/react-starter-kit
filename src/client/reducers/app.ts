import { LOCATION_CHANGE } from 'connected-react-router';
import { INITIAL_STATE } from '../store';
import { getSubNavItemsForLocation } from '../utils/routeUtil';
import IActionObject from './IActionObject';

type AppState = typeof INITIAL_STATE.app;

interface IAppReducer {
  [key: string]: (state: {}, action: IActionObject) => AppState;
}

const reducers: IAppReducer = {
  [LOCATION_CHANGE]: (app: AppState, { payload }) => ({
    ...app,
    sideMenu: {
      ...app.sideMenu,
      opened:
        payload && payload.location
          ? !!getSubNavItemsForLocation(payload.location.pathname)
          : false,
    },
  }),
};

export default (state = {}, action: IActionObject) =>
  reducers && reducers[action.type] ? reducers[action.type](state, action) : state;
