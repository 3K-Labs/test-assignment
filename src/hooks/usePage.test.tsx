import { renderHook, RenderHookResult } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import usePage from './usePage';

const customRender = (page?: number): RenderHookResult<number, unknown> => {
	return renderHook(() => usePage(), {
		wrapper: ({ children }) => (
			<MemoryRouter initialEntries={['/' + (page ?? '')]}>
				<Routes>
					<Route path="/" element={children}>
						<Route path=":page" element={null} />
					</Route>
				</Routes>
			</MemoryRouter>
		),
	});
};

describe('usePage', () => {
	it('should return correct page', () => {
		const { result } = customRender(3);
		expect(result.current).toBe(3);
	});

	it("should return 1 if there' no page", () => {
		const { result } = customRender();
		expect(result.current).toBe(1);
	});
});
