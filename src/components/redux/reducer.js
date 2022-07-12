import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './actions';
import { fetchContact, contactAdd, contactDelete } from './operation';

const items = createReducer([], {
  [fetchContact.fulfilled]: (_, action) => action.payload,
  [contactAdd.fulfilled]: (state, action) => {
    return [...state, action.payload];
  },

  [contactDelete.fulfilled]: (state, action) => {
    return state.filter(({ id }) => id !== action.payload);
  },
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => {
    return action.payload;
  },
});

export default combineReducers({
  items,
  filter,
});
