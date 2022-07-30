import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'>;

const Cell = ({ children, className, ...props }: Props): JSX.Element => (
	<div className={'p-4 flex items-center text-sm ' + className} {...props}>
		{children}
	</div>
);

export const TableCell = ({ children, className, ...props }: Props): JSX.Element => (
	<Cell className={'border-gray-200 border font-medium ' + className} {...props}>
		{children}
	</Cell>
);

export const HeaderCell = ({ children, className, ...props }: Props): JSX.Element => (
	<Cell
		className={
			'bg-pr-gray hover:bg-gray-800 text-white font-semibold shadow-xl cursor-pointer justify-center transition-all ' +
			className
		}
		{...props}
	>
		{children}
	</Cell>
);
