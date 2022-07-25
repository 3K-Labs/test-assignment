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
    'p-4 ' +
    (header
      ? 'bg-pr-gray hover:bg-gray-800 text-white font-semibold shadow-xl cursor-pointer font-semibold'
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
