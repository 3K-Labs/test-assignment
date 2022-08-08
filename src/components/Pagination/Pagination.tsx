import { useMemo } from 'react';

import { getPagesAmount } from '../../features/navigationSlice';
import { useAppSelector } from '../../hooks/useAppDispatch';
import usePage from '../../hooks/usePage';
import fillPagesArray from './fillPagesArray';
import { default as Link } from './PaginationLink';

const Pagination = (): JSX.Element => {
	const page = usePage();

	const pagesAmount = useAppSelector(getPagesAmount);
	const pagesArray = useMemo(
		() => fillPagesArray(page, pagesAmount),
		[page, pagesAmount],
	);

	return (
		<div className="w-full flex justify-between items-center font-sans font-medium text-2xl mt-4">
			<Link to={page > 1 ? (page - 1).toString() : undefined}>Назад</Link>
			<div className="font-bold italic text-lg flex flex-wrap justify-center items-center">
				{pagesArray.map((el) => el)}
			</div>
			<Link to={page < pagesAmount ? (page + 1).toString() : undefined}>Далее</Link>
		</div>
	);
};

export default Pagination;
