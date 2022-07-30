import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import navigationReducer from '../features/navigationSlice';
import postsReducer from '../features/postsSlice';

const rootReducer = combineReducers({
	posts: postsReducer,
	navigation: navigationReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
