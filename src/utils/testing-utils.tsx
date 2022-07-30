import type { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { useLocation } from 'react-router-dom';

import type { AppStore, RootState } from '../app/store';
import navigationReducer from '../features/navigationSlice';
import postsReducer from '../features/postsSlice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = configureStore({
			reducer: { posts: postsReducer, navigation: navigationReducer },
			preloadedState,
		}),
		...renderOptions
	}: ExtendedRenderOptions = {},
) {
	function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
		return <Provider store={store}>{children}</Provider>;
	}

	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const LocationDisplay = () => {
	const location = useLocation();
	return <div data-testid="location-display">{location.pathname}</div>;
};
