import {configureStore} from '@reduxjs/toolkit';
import searchPromptReducer from './slices/searchPromptSlice';

export const store = configureStore({
  reducer: {
    searchPrompt: searchPromptReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
