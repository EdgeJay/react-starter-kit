import { LOCATION_CHANGE } from 'connected-react-router';
import { getSubNavItemsForLocation } from '../utils/routeUtil';
import IActionObject from './IActionObject';

export interface IAppInitialState {
  sideMenu: {
    opened: boolean;
  };
}

interface IAppReducer {
  [key: string]: (state: {}, action: IActionObject) => IAppInitialState;
}

const reducers: IAppReducer = {
  [LOCATION_CHANGE]: (app: IAppInitialState, { payload }) => ({
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
