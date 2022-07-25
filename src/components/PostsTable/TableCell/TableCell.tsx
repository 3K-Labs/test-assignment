type Props = React.ComponentPropsWithoutRef<'div'> & {
  header?: boolean;
};

const TableCell = ({
  children,
  className,
  header = false,
  ...props
}: Props): JSX.Element => {
  const style = (className ?? '') + ' ' + (header ? '' : '');
  return (
    <div className={style} {...props}>
      {children}
    </div>
  );
};

export default TableCell;
