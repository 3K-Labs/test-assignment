import { beforeEach, describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/';

import Search from './Search';
import { renderWithProviders } from '../../utils/testing-utils';
import { MemoryRouter } from 'react-router-dom';

describe('Search component', () => {
  beforeEach(() => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <Search />
      </MemoryRouter>,
    );
  });

  it('should render', () => {
    expect(screen.getByPlaceholderText(/поиск/i)).toBeInTheDocument();
  });
  it('should be editable', async () => {
    const elem = screen.getByPlaceholderText(/поиск/i);
    await userEvent.type(elem, 'test');
    expect(elem).toHaveValue('test');
  });
});
