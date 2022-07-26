import { useLayoutEffect } from 'react';

import { setPosts } from '../features/postsSlice';
import { Post } from '../types';
import { useAppDispatch } from './useAppDispatch';

// getting a full list of posts from the API
const useFetchPosts = (): void => {
  const dispatch = useAppDispatch();

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
