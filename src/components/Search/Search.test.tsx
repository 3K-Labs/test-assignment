import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { LocationDisplay, renderWithProviders } from '../../utils/testing-utils';
import Search from './Search';

describe('Search component', () => {
	it('should render', () => {
		renderWithProviders(
			<MemoryRouter>
				<Search />
			</MemoryRouter>,
		);

		expect(screen.getByPlaceholderText(/поиск/i)).toBeInTheDocument();
	});
	it('should change the value in the redux store', async () => {
		const testingString = 'test';
		const { store } = renderWithProviders(
			<MemoryRouter>
				<Search />
			</MemoryRouter>,
		);

		const elem = screen.getByPlaceholderText(/поиск/i);
		await userEvent.type(elem, `${testingString}{enter}`);

		expect(elem).toHaveValue(testingString);
		expect(store.getState().navigation.search).toEqual(testingString);
	});
	it('should reset the page query parameter', async () => {
		const testingString = 'another test';
		renderWithProviders(
			<MemoryRouter initialEntries={['/5']}>
				<Search />
				<LocationDisplay />
			</MemoryRouter>,
		);

		expect(screen.getByTestId('location-display')).toHaveTextContent('/5');

		const elem = screen.getByPlaceholderText(/поиск/i);
		await userEvent.type(elem, `${testingString}{enter}`);

		expect(screen.getByTestId('location-display')).toHaveTextContent('/');
	});
});
