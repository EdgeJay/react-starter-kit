import { LOCATION_CHANGE } from 'connected-react-router';
import { Location } from 'history';
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

interface ILocationChangeActionObject extends IActionObject {
  payload: {
    location: Location;
  };
}

const reducers: IAppReducer = {
  [LOCATION_CHANGE]: (app: IAppInitialState, { payload }: ILocationChangeActionObject) => ({
    ...app,
    sideMenu: {
      ...app.sideMenu,
      opened: !!getSubNavItemsForLocation(payload.location.pathname),
    },
  }),
};

export default (state = {}, action: IActionObject) =>
  reducers && reducers[action.type] ? reducers[action.type](state, action) : state;
