import { Post } from '../../../types';
import TableCell from '../TableCell/TableCell';

type Props = {
  post?: Post;
};

const TableRow = ({ post }: Props): JSX.Element => {
  if (!post) {
    return (
      <>
        <TableCell>&nbsp;</TableCell>
        <TableCell>&nbsp;</TableCell>
        <TableCell>&nbsp;</TableCell>
      </>
    );
  }
  return (
    <>
      <TableCell className="justify-center">{post.id}</TableCell>
      <TableCell>{post.title}</TableCell>
      <TableCell>{post.body}</TableCell>
    </>
  );
};

export default TableRow;
