import {createSlice} from '@reduxjs/toolkit';

export interface searchPromptState {
  value: {lastKey: string; shown: boolean};
}

const initialState: searchPromptState = {
  value: {
    lastKey: '',
    shown: false,
  },
};

export const searchPromptSlice = createSlice({
  name: 'searchPrompt',
  initialState,
  reducers: {
    toggle: state => {
      state.value.shown = !state.value.shown;
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggle} = searchPromptSlice.actions;

export default searchPromptSlice.reducer;
