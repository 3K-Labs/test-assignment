import { useLayoutEffect, useState } from 'react';

import { Post } from '../types';

type Result = {
	posts: Post[];
	isLoading: boolean;
	error: string;
};

// getting a full list of posts from the API
const useFetchPosts = (): Result => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const getPosts = async (): Promise<void> => {
		setIsLoading(true);
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		setIsLoading(false);
		if (res.status !== 200) {
			setError('An error occured while fetching data from the server');
			return;
		}
		try {
			const data: Post[] = await res.json(); // dangerous
			setPosts(data);
		} catch (e) {
			setError('Cannot parse the data');
		}
	};

	useLayoutEffect(() => {
		getPosts();
	}, []);

	return { posts, isLoading, error };
};

export default useFetchPosts;
