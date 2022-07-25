import useFetchPosts from '../../hooks/useFetchPosts';
import Pagination from '../Pagination/Pagination';
import PostsTable from '../PostsTable/PostsTable';
import Search from '../Search/Search';

const App = (): JSX.Element => {
  useFetchPosts();

  return (
    <div className="max-w-5xl my-4 mx-auto">
      <Search />
      <PostsTable />
      <Pagination />
    </div>
  );
};

export default App;
