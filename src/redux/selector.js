export const BudgetValue = store => store.value;

export const TotalExpenses = store => {
  return store.notes.reduce((acc, el) => Number(acc) + Number(el.amount), 0);
};

export const calculateBalance = store => {
  return BudgetValue(store) - TotalExpenses(store);
};
