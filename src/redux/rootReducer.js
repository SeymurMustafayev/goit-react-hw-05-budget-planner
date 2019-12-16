import { combineReducers } from 'redux';
import budgetReducer from './budget/budgetReducers';
import expenseReducer from './ expense/expenseReducers';

const rootReducer = combineReducers({
  value: budgetReducer,
  notes: expenseReducer,
});
export default rootReducer;
