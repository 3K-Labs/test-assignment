import { Key, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
	to?: string;
	active?: boolean;
	key?: Key;
	children: ReactNode;
};

const PaginationLink = ({ to, active, children }: Props): JSX.Element => {
	if (to) {
		return (
			<Link
				to={`../${to !== '1' ? to : ''}`}
				className="py-1 px-3 hover:text-link-green hover:bg-slate-100 transition-all rounded-lg mx-1 outline-none focus:ring-2 focus:ring-link-green/50"
			>
				{children}
			</Link>
		);
	}
	return (
		<span className={`py-1 px-3${active ? ' text-link-green' : ''}`}>{children}</span>
	);
};

export default PaginationLink;
