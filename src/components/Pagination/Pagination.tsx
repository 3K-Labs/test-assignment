import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPagesAmount } from '../../features/navigationSlice';

import { useAppSelector } from '../../hooks/useAppDispatch';
import fillPagesArray from './fillPagesArray';
import PaginationLink from './PaginationLink';

const Pagination = (): JSX.Element => {
  const { page: pageStr } = useParams();
  const page = Number(pageStr) ? Number(pageStr) : 1;

  const pagesAmount = useAppSelector(getPagesAmount);
  const pagesArray = useMemo(
    () => fillPagesArray(page, pagesAmount),
    [page, pagesAmount],
  );

  return (
    <div className="w-full flex justify-between items-center font-sans font-semibold text-2xl mt-4">
      <PaginationLink to={page > 1 ? (page - 1).toString() : undefined}>
        Назад
      </PaginationLink>
      <div className="font-bold italic text-lg flex flex-wrap justify-center items-center">
        {pagesAmount > 1 ? pagesArray.map((el) => el) : null}
      </div>
      <PaginationLink to={page < pagesAmount ? (page + 1).toString() : undefined}>
        Далее
      </PaginationLink>
    </div>
  );
};

export default Pagination;
