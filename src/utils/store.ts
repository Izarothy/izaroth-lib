import {configureStore} from '@reduxjs/toolkit';
import searchPromptReducer from './slices/searchPromptSlice';
import sidebarReducer from './slices/sidebarSlice';

export const store = configureStore({
  reducer: {
    searchPrompt: searchPromptReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
