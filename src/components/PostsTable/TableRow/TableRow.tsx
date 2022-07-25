import { Post } from '../../../types';
import TableCell from '../TableCell/TableCell';

type Props = {
  post?: Post;
};

const TableRow = ({ post }: Props): JSX.Element => {
  if (!post) {
    return (
      <div>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </div>
    );
  }
  return (
    <div>
      <TableCell>{post.id}</TableCell>
      <TableCell>{post.title}</TableCell>
      <TableCell>{post.body}</TableCell>
    </div>
  );
};

export default TableRow;
