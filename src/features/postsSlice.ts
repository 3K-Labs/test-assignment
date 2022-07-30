import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../app/store';
import { Post } from '../types';

export interface PostsState {
	value: Post[];
}

const initialState: PostsState = {
	value: [],
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts: (state, { payload }: PayloadAction<Post[]>) => {
			state.value = payload;
		},
	},
});

export const { setPosts } = postsSlice.actions;

export const getPosts = (state: RootState) => state.posts.value;

export default postsSlice.reducer;
