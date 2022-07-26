import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import postsReducer from '../features/postsSlice';
import navigationReducer from '../features/navigationSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  navigation: navigationReducer,
});

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
