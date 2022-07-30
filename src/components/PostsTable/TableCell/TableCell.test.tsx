import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HeaderCell, TableCell } from './TableCell';

describe('TableCell component', () => {
	it('should render the TableCell', () => {
		render(<TableCell>test</TableCell>);

		expect(screen.getByText(/test/i)).toBeInTheDocument();
	});

	it('should render the HeaderCell', () => {
		render(<HeaderCell>test</HeaderCell>);

		expect(screen.getByText(/test/i)).toBeInTheDocument();
	});
});
