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
        className="py-2 px-4 hover:text-green-600 hover:bg-slate-100 transition-all"
      >
        {children}
      </Link>
    );
  }
  return (
    <span className={`py-2 px-4${active ? ' text-link-green' : ''}`}>{children}</span>
  );
};

export default PaginationLink;
