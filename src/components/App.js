import React from 'react';
import styled from 'styled-components';
import BudgetForm from './BudgetForm/BudgetForm';
import Values from './Values/Values';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import ExpensesTable from './ExpensesTable/ExpensesTable';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <Container className="App">
      <BudgetForm />
      <Values />
      <ExpenseForm />
      <ExpensesTable />
    </Container>
  );
}

export default App;
