import types from '../types';

const addBudget = value => ({
  type: types.BUDGET_ADD,
  payload: {
    budget: value,
  },
});

export default addBudget;
