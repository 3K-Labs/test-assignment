import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it, test } from 'vitest';

import { Sorting } from '../../utils/constants';
import { LocationDisplay, renderWithProviders } from '../../utils/testing-utils';
import Pagination from './Pagination';

const customRender = (pages: number, currentPage?: number) => {
	return renderWithProviders(
		<MemoryRouter initialEntries={['/' + (currentPage ?? '')]}>
			<Routes>
				<Route path="/" element={<Pagination />}>
					<Route path=":page" element={null} />
				</Route>
			</Routes>
			<LocationDisplay />
		</MemoryRouter>,
		{
			preloadedState: {
				navigation: {
					sorting: Sorting.id_asc,
					search: '',
					pagesAmount: pages,
				},
			},
		},
	);
};

describe('Pagination component', () => {
	it('should render with many pages', () => {
		const pagesAmount = 10;
		customRender(pagesAmount);

		expect(screen.getByRole('link', { name: /далее/i })).toBeInTheDocument(); // next page button should be active
		expect(screen.getByRole('link', { name: '2' })).toBeInTheDocument(); // second page button should be active
		expect(
			screen.getByRole('link', { name: pagesAmount.toString() }),
		).toBeInTheDocument(); // last page button shoul be active

		expect(screen.queryByRole('link', { name: '1' })).toBeNull(); // first page button should be unactive
		expect(screen.queryByRole('link', { name: /назад/i })).toBeNull(); // previous page button should be unactive
	});
	it('should render with only one page', () => {
		const pagesAmount = 1;
		customRender(pagesAmount);

		expect(screen.getByText(/далее/i)).toBeInTheDocument();
		expect(screen.getByText(/назад/i)).toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
		expect(screen.queryByRole('link', { name: /далее/i })).toBeNull();
		expect(screen.queryByRole('link', { name: /назад/i })).toBeNull();
		expect(screen.queryByRole('link', { name: '1' })).toBeNull();
	});

	test('next page and previous page buttons should be working', async () => {
		const pagesAmount = 2;
		customRender(pagesAmount);

		expect(screen.getByRole('link', { name: /далее/i })).toBeInTheDocument();
		expect(screen.queryByRole('link', { name: /назад/i })).toBeNull();
		await userEvent.click(screen.getByRole('link', { name: /далее/i }));
		expect(screen.getByTestId('location-display')).toHaveTextContent('/2');
		expect(screen.getByRole('link', { name: /назад/i })).toBeInTheDocument();
		expect(screen.queryByRole('link', { name: /далее/i })).toBeNull();
		await userEvent.click(screen.getByRole('link', { name: /назад/i }));
		expect(screen.getByTestId('location-display')).toHaveTextContent('/');
		expect(screen.queryByRole('link', { name: /далее/i })).toBeInTheDocument();
		expect(screen.queryByRole('link', { name: /назад/i })).toBeNull();
	});
	test('last page and first page buttons should be working', async () => {
		const pagesAmount = 25;
		customRender(pagesAmount);

		expect(screen.getByRole('link', { name: '25' })).toBeInTheDocument();
		await userEvent.click(screen.getByRole('link', { name: '25' }));
		expect(screen.getByTestId('location-display')).toHaveTextContent('/25');

		expect(screen.getByRole('link', { name: '1' })).toBeInTheDocument();
		await userEvent.click(screen.getByRole('link', { name: '1' }));
		expect(screen.getByTestId('location-display')).toHaveTextContent('/');
	});
});
