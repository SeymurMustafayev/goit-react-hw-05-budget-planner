import types from '../types';

const budgetReducers = (state = 0, action) => {
  switch (action.type) {
    case types.BUDGET_ADD:
      return action.payload.budget;

    default:
      return state;
  }
};

export default budgetReducers;
