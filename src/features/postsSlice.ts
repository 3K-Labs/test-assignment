import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../app/store';
import { Post } from '../types';

export interface PostsState {
	value: Post[];
	isLoading: boolean;
}

const initialState: PostsState = {
	value: [],
	isLoading: false,
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts: (state, { payload }: PayloadAction<Post[]>) => {
			state.value = payload;
		},
		setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
			state.isLoading = payload;
		},
	},
});

export const { setPosts, setIsLoading } = postsSlice.actions;

export const getPosts = (state: RootState) => state.posts.value;
export const getIsLoading = (state: RootState) => state.posts.isLoading;

export default postsSlice.reducer;
