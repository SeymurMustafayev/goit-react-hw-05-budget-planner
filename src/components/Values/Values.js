import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Value from '../Value/Value';
import * as Selectors from '../../redux/selector';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);
Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

const mapStateToProps = store => ({
  budget: Selectors.BudgetValue(store),
  expenses: Selectors.TotalExpenses(store),
  balance: Selectors.calculateBalance(store),
});

export default connect(mapStateToProps, null)(Values);
