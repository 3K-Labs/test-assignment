import { Post } from '../../../types';
import { EmptyCell, LoadingCell, TableCell } from '../TableCell/TableCell';

type Props = {
	post?: Post;
	isLoading?: boolean;
};

const TableRow = ({ post, isLoading = false }: Props): JSX.Element => {
	if (isLoading)
		return (
			<>
				<LoadingCell />
				<LoadingCell />
				<LoadingCell />
			</>
		);

	if (!post)
		return (
			<>
				<EmptyCell />
				<EmptyCell />
				<EmptyCell />
			</>
		);

	return (
		<>
			<TableCell className="justify-center">{post.id}</TableCell>
			<TableCell>{post.title}</TableCell>
			<TableCell>{post.body}</TableCell>
		</>
	);
};

export default TableRow;
