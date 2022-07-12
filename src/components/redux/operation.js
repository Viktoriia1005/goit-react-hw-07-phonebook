import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://62cd5e3ba43bf7800856f2e4.mockapi.io/contacts';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get(`${BASE_URL}contacts/`);
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const contactAdd = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}contacts`, contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const contactDelete = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
