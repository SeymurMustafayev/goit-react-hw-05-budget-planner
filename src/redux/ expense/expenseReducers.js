import types from '../types';

const expenseReducers = (state = [], action) => {
  switch (action.type) {
    case types.EXPENSE_NOTE_ADD:
      return [...state, action.payload.note];

    case types.EXPENSE_NOTE_DELETE:
      return state.filter(el => el.id !== action.payload.id);

    default:
      return state;
  }
};
export default expenseReducers;
