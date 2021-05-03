import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TokenState {
  value: string | null;
}

const initialState: TokenState = {
  value: null,
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    unsetToken: state => {
      state.value = null;
    },
  },
});

export const {setToken, unsetToken} = tokenSlice.actions;

export default tokenSlice.reducer;
