import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

interface TokenState {
  value: string | null;
}

const initialState: TokenState = {
  value: null,
};

const setToken = createAsyncThunk<string, string>(
  'token/set',
  async (token: string) => {
    await SecureStore.setItemAsync('TOKEN', token);
    return token;
  },
);

const unsetToken = createAsyncThunk('token/unset', async () => {
  await SecureStore.deleteItemAsync('TOKEN');
});

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    unsetToken: state => {
      state.value = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(setToken.fulfilled, (state, {payload}) => {
      state.value = payload;
    });

    builder.addCase(unsetToken.fulfilled, state => {
      state.value = null;
    });
  },
});

export {setToken, unsetToken};

export default tokenSlice.reducer;
