import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'>;

const Cell = ({ className = '', ...props }: Props): JSX.Element => (
	<div className={'p-4 flex items-center text-sm ' + className} {...props} />
);

export const TableCell = ({ className = '', ...props }: Props): JSX.Element => (
	<Cell className={'border-gray-200 border font-medium ' + className} {...props} />
);

export const HeaderCell = ({ className = '', ...props }: Props): JSX.Element => (
	<Cell
		className={
			'bg-pr-gray hover:bg-gray-800 text-white font-semibold shadow-xl cursor-pointer justify-center transition-all ' +
			className
		}
		{...props}
	/>
);

export const LoadingCell = (): JSX.Element => (
	<TableCell>
		<div className="h-full w-full py-2 bg-gray-100 rounded">&nbsp;</div>
	</TableCell>
);

export const EmptyCell = (): JSX.Element => <TableCell>&nbsp;</TableCell>;
