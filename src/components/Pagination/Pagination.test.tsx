import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/';

import Pagination from './Pagination';
import { renderWithProviders } from '../../utils/testing-utils';
import { MemoryRouter } from 'react-router-dom';
import { Sorting } from '../../utils/constants';

describe('Search component', () => {
  const pagesAmount = 10;
  const preloadedState = {
    navigation: {
      sorting: Sorting.id_asc,
      search: '',
      pagesAmount,
    },
  };

  it('should render', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <Pagination />
      </MemoryRouter>,
      { preloadedState },
    );

    expect(screen.getByRole('link', { name: /далее/i })).toBeInTheDocument(); // next page button shoul be active
    expect(screen.getByRole('link', { name: '2' })).toBeInTheDocument(); // second page button shoul be active
    expect(
      screen.getByRole('link', { name: pagesAmount.toString() }),
    ).toBeInTheDocument(); // last page button shoul be active

    expect(screen.queryByRole('link', { name: '1' })).toBeNull(); // first page button should be unactive
    expect(screen.queryByRole('link', { name: /Назад/i })).toBeNull(); // previous page button should be unactive
  });
});
