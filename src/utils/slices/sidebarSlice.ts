import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface sidebarState {
  value: string[];
}

const initialState: sidebarState = {
  value: [''],
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebarList: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload;
    },
  },
});

export const {setSidebarList} = sidebarSlice.actions;

export default sidebarSlice.reducer;
