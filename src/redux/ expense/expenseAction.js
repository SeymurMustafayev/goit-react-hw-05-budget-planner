import types from '../types';

export const addExpense = data => ({
  type: types.EXPENSE_NOTE_ADD,
  payload: {
    note: data,
  },
});

export const deleteExpense = deleteId => ({
  type: types.EXPENSE_NOTE_DELETE,
  payload: {
    id: deleteId,
  },
});
