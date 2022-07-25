import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../app/store';
import { setPosts } from '../features/postsSlice';
import { Post } from '../types';

type Result = {
  posts: Post[];
  // isLoading: boolean;
  // isError: boolean;
};

const useFetchPosts = (): Result => {
  // const [posts, setPosts] = useState<Post[]>([]);
  const posts = useSelector((state: RootState) => state.posts.value);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isError, setIsError] = useState<boolean>(false);
  const dispatch = useDispatch();

  const getPosts = async (): Promise<void> => {
    // setIsLoading(true);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    try {
      const data: Post[] = await res.json(); // dangerous
      setPosts(data);
      dispatch(setPosts(data));
    } catch (e) {
      console.error(e);
      // setIsError(true);
    }
    // setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {
    posts,
    // isLoading,
    // isError,
  };
};

export default useFetchPosts;
