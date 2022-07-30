import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import useFetchPosts from './useFetchPosts';

describe('useFetchPosts', () => {
	const spy = vi.spyOn(global, 'fetch');
	// I know, this test is obviously bad
	// alas, for now I didn't find the right way to mock fetch request
	// so this test is supposed to make a real request and see if it's working

	it('should fetch posts', async () => {
		const { result } = renderHook(() => useFetchPosts());
		expect(result.current.posts.length).toBe(0);
		expect(result.current.isLoading).toBeTruthy();
		await waitFor(() => expect(result.current.isLoading).toBeTruthy());
		await waitFor(() => expect(result.current.posts.length).toBeGreaterThan(0));
		expect(result.current.isLoading).toBeFalsy();
		expect(spy).toBeCalledTimes(1);
	});
});
