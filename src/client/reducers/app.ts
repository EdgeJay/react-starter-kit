import { LOCATION_CHANGE } from 'connected-react-router';
import IActionObject from './IActionObject';

const reducers: { [key: string]: (state: {}, action: {}) => {} } = {
  [LOCATION_CHANGE]: app => {
    console.log('location change!'); // tslint:disable-line
    return {
      ...app,
    };
  },
};

export default (state = {}, action: IActionObject) =>
  reducers && reducers[action.type] ? reducers[action.type](state, action) : state;
