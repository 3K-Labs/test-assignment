import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Sorting } from '../../../utils/constants';
import { renderWithProviders } from '../../../utils/testing-utils';
import TableHeader from './TableHeader';

describe('TableHeader component', () => {
	it('should render', () => {
		renderWithProviders(<TableHeader />);

		expect(screen.getByText(/id/i)).toBeInTheDocument();
		expect(screen.getByText(/заголовок/i)).toBeInTheDocument();
		expect(screen.getByText(/описание/i)).toBeInTheDocument();
	});

	it('should change the sorting value in the Redux store', async () => {
		const { store } = renderWithProviders(<TableHeader />);
		expect(store.getState().navigation.sorting).toEqual(Sorting.id_asc);
		await userEvent.click(screen.getByText(/id/i));
		expect(store.getState().navigation.sorting).toEqual(Sorting.id_desc);
		await userEvent.click(screen.getByText(/id/i));
		expect(store.getState().navigation.sorting).toEqual(Sorting.id_asc);
		await userEvent.click(screen.getByText(/заголовок/i));
		expect(store.getState().navigation.sorting).toEqual(Sorting.title_asc);
		await userEvent.click(screen.getByText(/заголовок/i));
		expect(store.getState().navigation.sorting).toEqual(Sorting.title_desc);
		await userEvent.click(screen.getByText(/описание/i));
		expect(store.getState().navigation.sorting).toEqual(Sorting.body_asc);
		await userEvent.click(screen.getByText(/описание/i));
		expect(store.getState().navigation.sorting).toEqual(Sorting.body_desc);
	});
});
