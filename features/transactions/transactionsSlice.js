import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      const { category } = action.payload
      state[category].push(action.payload)
    },
    deleteTransaction: (state, action) => {
      const { id, category } = action.payload
      // const index = state[category].findIndex(transaction => transaction.id === id)
      // state[category].splice(index, 1)
      state[category] = state[category].filter(transaction => transaction.id !== id)
    },
  }
});

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);
export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;