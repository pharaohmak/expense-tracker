import React from 'react';
import { useSelector } from 'react-redux';
import { selectBudgets } from './budgetsSlice';
import Budget from '../../components/Budget';

const Transactions = () => {
  const budgets = useSelector(selectBudgets);
  return (
    <ul className='comments-container'>
      { budgets.map(budget => <Budget budget={budget}/>) }
    </ul>
  );
};

export default Transactions;