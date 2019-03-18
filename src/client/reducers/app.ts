import IAction from './IAction';

const reducers: { [key: string]: any } = {};

export default (state = {}, action: IAction) =>
  reducers && reducers[action.type] ? reducers[action.type](state, action) : state;
