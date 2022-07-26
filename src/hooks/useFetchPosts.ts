import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setPosts } from '../features/postsSlice';
import { Post } from '../types';

// getting a full list of posts from the API
const useFetchPosts = (): void => {
  const dispatch = useDispatch();

  const getPosts = async (): Promise<void> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    try {
      const data: Post[] = await res.json(); // dangerous
      setPosts(data);
      dispatch(setPosts(data));
    } catch (e) {
      console.error(e);
    }
  };

  useLayoutEffect(() => {
    getPosts();
  }, []);
};

export default useFetchPosts;
