import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { RootState } from '../../app/store';

function fillPagesArray(page: number, all: number): string[] {
  let arr: string[] = [];
  let num = Math.max(Math.min(page - 2, all - 4), 1);
  if (num > 1) arr.push('1');
  if (num > 2) arr.push('...');
  for (let i = 0; i < 5 && num < all; ++num, ++i) arr.push(num.toString());
  if (num < all) arr.push('...');
  arr.push(all.toString());

  return arr;
}

const Pagination = (): JSX.Element => {
  const { page: pageStr } = useParams();
  const page = Number(pageStr) ? Number(pageStr) : 1;

  const { pagesAmount } = useSelector((state: RootState) => state.navigation);
  // const pages = Array.from({ length: pagesAmount }, (_, i) => i + 1); // generate an array of increasing numbers
  const pages = fillPagesArray(page, pagesAmount);

  const linkStyle = 'py-2 px-4 hover:text-green-600 hover:bg-slate-100 transition-all';

  const prevLink =
    page - 1 ? (
      <Link to={`../${page - 2 ? page - 1 : ''}`} className={linkStyle}>
        Назад
      </Link>
    ) : (
      <span className="py-2 px-4">Назад</span>
    );
  const nextLink =
    page < pagesAmount ? (
      <Link to={`../${page + 1}`} className={linkStyle}>
        Далее
      </Link>
    ) : (
      <span className="py-2 px-4">Далее</span>
    );

  return (
    <div className="w-full flex justify-between items-center font-sans font-medium text-2xl mt-4">
      {prevLink}
      <div className="font-bold italic text-lg flex flex-wrap justify-center items-center">
        {pagesAmount > 1
          ? pages.map((el) => {
              if (el === '...')
                return (
                  <span key={el} className="py-2 px-4">
                    {el}
                  </span>
                );
              if (el === page.toString())
                return (
                  <span key={el} className="text-link-green py-2 px-4">
                    {el}
                  </span>
                );
              return (
                <Link
                  key={el}
                  to={`../${Number(el) - 1 ? el : ''}`}
                  className={linkStyle}
                >
                  {el}
                </Link>
              );
            })
          : null}
      </div>
      {nextLink}
    </div>
  );
};

export default Pagination;
