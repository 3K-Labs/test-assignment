import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetchPosts from '../../hooks/useFetchPosts';
import usePage from '../../hooks/usePage';
import Pagination from '../Pagination/Pagination';
import PostsTable from '../PostsTable/PostsTable';
import Search from '../Search/Search';

const App = (): JSX.Element => {
  useFetchPosts();

  const page = usePage();
  const navigation = useNavigate();

  useEffect(() => {
    if (page < 1) {
      navigation('../', { replace: true });
    }
  }, []);

  return (
    <div className="max-w-5xl my-4 mx-auto">
      <Search />
      <PostsTable />
      <Pagination />
    </div>
  );
};

export default App;
