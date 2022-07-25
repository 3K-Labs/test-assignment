import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import TableCell from '../TableCell/TableCell';

// type Props = {};

const TableHeader = (): JSX.Element => {
  const iconStyles = 'ml-2 text-lg';
  const getIcon = (flag: boolean) =>
    flag ? <FaAngleDown className={iconStyles} /> : <FaAngleUp className={iconStyles} />;

  return (
    <>
      <TableCell header={true}>ID {getIcon(true)}</TableCell>
      <TableCell header={true}>Заголовок {getIcon(false)}</TableCell>
      <TableCell header={true}>Описание {getIcon(true)}</TableCell>
    </>
  );
};

export default TableHeader;
