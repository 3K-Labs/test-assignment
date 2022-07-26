import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'> & {
  header?: boolean;
};

const TableCell = ({
  children,
  className,
  header = false,
  ...props
}: Props): JSX.Element => {
  const style =
    'p-4 flex items-center text-sm ' +
    (header
      ? 'bg-pr-gray hover:bg-gray-800 text-white font-semibold shadow-xl cursor-pointer justify-center font-semibold transition-all'
      : 'border-gray-200 border font-medium') +
    ' ' +
    (className ?? '');
  return (
    <div className={style} {...props}>
      {children}
    </div>
  );
};

export default TableCell;
