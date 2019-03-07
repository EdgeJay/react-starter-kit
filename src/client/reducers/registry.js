const reducers = {};

export default (state = {}, action) =>
  reducers && reducers[action.type] ? reducers[action.type](state, action) : state;
