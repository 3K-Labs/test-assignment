// import useFetchPosts from '../../hooks/useFetchPosts';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { setPagesAmount } from '../../features/navigationSlice';
import { setIsLoading, setPosts } from '../../features/postsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import usePage from '../../hooks/usePage';
import { Post } from '../../types';
import { POSTS_PER_PAGE } from '../../utils/constants';
import Pagination from '../Pagination/Pagination';
import PostsTable from '../PostsTable/PostsTable';
import Search from '../Search/Search';

const App = (): JSX.Element => {
	// const { posts } = useFetchPosts();
	const page = usePage();
	const sort = useAppSelector((state) => state.navigation.sorting).split('_');
	const search = useAppSelector((state) => state.navigation.search);

	const dispatch = useAppDispatch();

	const { data, isLoading } = useQuery(
		['posts', page, sort[0], sort[1], search],
		async () => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts?q=${search}&_limit=${POSTS_PER_PAGE}&_page=${page}&_sort=${sort[0]}&_order=${sort[1]}`,
			);
			const posts = (await res.json()) as Post[];
			const totalCount = Number(res.headers.get('x-total-count')) || 1;
			return { posts, pagesAmount: Math.ceil(totalCount / POSTS_PER_PAGE) };
		},
		{
			refetchOnWindowFocus: false,
		},
	);

	const navigation = useNavigate();

	useEffect(() => {
		if (page < 1) {
			navigation('../', { replace: true });
		}
	}, []);
	useEffect(() => {
		dispatch(setIsLoading(isLoading));
		if (!data) return;
		dispatch(setPagesAmount(data.pagesAmount));
		dispatch(setPosts(data.posts));
	}, [data, isLoading]);

	return (
		<div className="max-w-5xl my-4 mx-auto">
			<Search />
			<PostsTable />
			<Pagination />
		</div>
	);
};

export default App;
