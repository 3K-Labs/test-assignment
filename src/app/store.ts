import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/postsSlice';
import navigationReducer from '../features/navigationSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
