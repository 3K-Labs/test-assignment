import { nanoid } from 'nanoid';

import PaginationLink from './PaginationLink';

export default function fillPagesArray(page: number, all: number): JSX.Element[] {
	let arr: string[] = [];
	let num = Math.max(Math.min(page - 2, all - 4), 1);
	if (num > 1) arr.push('1');
	if (num > 2) arr.push('...');
	for (let i = 0; i < 5 && num < all; ++num, ++i) arr.push(num.toString());
	if (num < all) arr.push('...');
	arr.push(Math.max(all, 1).toString());

	return arr.map((el) => {
		const active = el === page.toString();

		return (
			<PaginationLink
				key={nanoid(6)}
				to={el !== '...' && !active ? el : undefined}
				active={active}
			>
				{el}
			</PaginationLink>
		);
	});
}
