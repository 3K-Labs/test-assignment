import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../app/store';
import { setPosts } from '../../features/postsSlice';
import { Post } from '../../types';
import Pagination from '../Pagination/Pagination';
import PostsTable from '../PostsTable/PostsTable';
import Search from '../Search/Search';

const App = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const posts = useSelector((state: RootState) => state.posts.value);
  const dispatch = useDispatch();

  const getPosts = async (): Promise<void> => {
    setIsLoading(true);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    try {
      const data: Post[] = await res.json(); // dangerous
      dispatch(setPosts(data));
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="max-w-5xl">
      <Search />
      <PostsTable />
      <Pagination />
      {isLoading
        ? 'Loading...'
        : posts.map((post) => <div key={post.id}>{post.body}</div>)}
    </div>
  );
};

export default App;
