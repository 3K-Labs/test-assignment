import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';

type Props = {};

const PostsTable = ({}: Props): JSX.Element => {
  return (
    <div>
      <TableHeader />
      <TableRow />
    </div>
  );
};

export default PostsTable;
