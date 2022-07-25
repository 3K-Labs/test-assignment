import Pagination from '../Pagination/Pagination';
import PostsTable from '../PostsTable/PostsTable';
import Search from '../Search/Search';

const App = (): JSX.Element => {
  return (
    <div className="max-w-5xl">
      <Search />
      <PostsTable />
      <Pagination />
    </div>
  );
};

export default App;
