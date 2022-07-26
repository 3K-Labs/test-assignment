// type Props = {};

import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { RootState } from '../../app/store';

const Pagination = (): JSX.Element => {
  const { page: pageStr } = useParams();
  const page = Number(pageStr) ? Number(pageStr) : 1;

  const { pagesAmount } = useSelector((state: RootState) => state.navigation);
  const pages = Array.from({ length: pagesAmount }, (_, i) => i + 1); // generate an array of increasing numbers

  const prevLink =
    page - 1 ? (
      <Link to={`../${page - 2 ? page - 1 : ''}`}>Назад</Link>
    ) : (
      <span>Назад</span>
    );
  const nextLink =
    page < pagesAmount ? <Link to={`../${page + 1}`}>Далее</Link> : <span>Далее</span>;

  return (
    <div className="w-full flex justify-between font-sans font-medium text-2xl mt-4">
      {prevLink}
      <div className="font-bold italic text-lg">
        {pages.map((el) =>
          el === page ? (
            <span key={el} className="text-link-green p-2">
              {el}
            </span>
          ) : (
            <Link key={el} to={`../${el - 1 ? el : ''}`} className="p-2">
              {el}
            </Link>
          ),
        )}
      </div>
      {nextLink}
    </div>
  );
};

export default Pagination;
