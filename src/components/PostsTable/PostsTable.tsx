import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';
import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';

// type Props = {};

const PostsTable = (): JSX.Element => {
  const posts = useSelector((state: RootState) => state.posts.value);

  return (
    <div className="grid grid-cols-[auto_1fr_2fr]">
      <TableHeader />
      {posts.map((post) => (
        <TableRow key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsTable;
