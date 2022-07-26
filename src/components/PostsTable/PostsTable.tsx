import { useLayoutEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState } from '../../app/store';
import { setPagesAmount } from '../../features/navigationSlice';
import { Post } from '../../types';
import { POSTS_PER_PAGE, Sorting } from '../../utils/constants';
import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';

// type Props = {};

const PostsTable = (): JSX.Element => {
  const { page: pageStr } = useParams();
  const page = Number(pageStr) ? Number(pageStr) : 1;

  const { sorting, search } = useSelector((state: RootState) => state.navigation);

  const dispatch = useDispatch();
  const allPosts = useSelector((state: RootState) => state.posts.value);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);

  const filteredPosts = useMemo(() => {
    let posts = [...allPosts];
    if (!allPosts.length) return posts;

    switch (sorting) {
      case Sorting.id_asc:
        break;
      case Sorting.id_desc:
        posts = posts.reverse();
        break;
      case Sorting.title_asc:
        posts = posts.sort((a, b) => (a.title > b.title ? 1 : -1));
        break;
      case Sorting.title_desc:
        posts = posts.sort((a, b) => (a.title < b.title ? 1 : -1));
        break;
      case Sorting.body_asc:
        posts = posts.sort((a, b) => (a.body > b.body ? 1 : -1));
        break;
      case Sorting.body_desc:
        posts = posts.sort((a, b) => (a.body < b.body ? 1 : -1));
        break;
    }
    if (search.length) {
      posts = posts.filter(
        (post) => post.title.includes(search) || post.body.includes(search),
      );
    }

    return posts;
  }, [allPosts, page, sorting, search]);

  useLayoutEffect(() => {
    dispatch(setPagesAmount(Math.ceil(filteredPosts.length / POSTS_PER_PAGE)));
    setVisiblePosts(
      filteredPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE),
    );
  }, [filteredPosts]);

  return (
    <div className="grid grid-cols-[auto_1fr_2fr]">
      <TableHeader />
      {visiblePosts.map((post) => (
        <TableRow key={post.id} post={post} />
      ))}
      {visiblePosts.length < POSTS_PER_PAGE
        ? Array(POSTS_PER_PAGE - visiblePosts.length)
            .fill(0)
            .map((_, i) => <TableRow key={i} />)
        : null}
    </div>
  );
};

export default PostsTable;
