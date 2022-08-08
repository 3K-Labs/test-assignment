import { useAppSelector } from '../../hooks/useAppDispatch';
import { POSTS_PER_PAGE } from '../../utils/constants';
import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';

// type Props = {};

const PostsTable = (): JSX.Element => {
	const { value: posts, isLoading } = useAppSelector((state) => state.posts);

	if (isLoading) {
		return (
			<div className="grid grid-cols-[auto_1fr_2fr]">
				<TableHeader />
				{Array(POSTS_PER_PAGE)
					.fill(0)
					.map((_, i) => (
						<TableRow key={i} isLoading={true} />
					))}
			</div>
		);
	}

	return (
		<div className="grid grid-cols-[auto_1fr_2fr]">
			<TableHeader />
			{posts.map((post) => (
				<TableRow key={post.id} post={post} />
			))}
			{posts.length < POSTS_PER_PAGE
				? Array(POSTS_PER_PAGE - posts.length)
						.fill(0)
						.map((_, i) => <TableRow key={i} />)
				: null}
		</div>
	);
};

export default PostsTable;
