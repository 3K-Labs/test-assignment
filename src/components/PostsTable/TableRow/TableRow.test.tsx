import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Post } from '../../../types';
import TableRow from './TableRow';

describe('TableRow component', () => {
	it('should render with the post provided to the component props', () => {
		const post: Post = {
			userId: 1,
			id: 1,
			title: 'test title',
			body: 'test body',
		};
		render(<TableRow post={post} />);

		expect(screen.getByText(/1/i)).toBeInTheDocument();
		expect(screen.getByText(/test title/i)).toBeInTheDocument();
		expect(screen.getByText(/test body/i)).toBeInTheDocument();
	});

	it('should render with no props', () => {
		const { container } = render(<TableRow />);

		expect(container.childElementCount).toBe(3);
		expect(container.childNodes[0]).toContainHTML('&nbsp;');
		expect(container.childNodes[1]).toContainHTML('&nbsp;');
		expect(container.childNodes[2]).toContainHTML('&nbsp;');
	});
});
