import TableCell from '../TableCell/TableCell';

// type Props = {};

const TableHeader = (): JSX.Element => {
  return (
    <div>
      <TableCell>ID</TableCell>
      <TableCell>Заголовок</TableCell>
      <TableCell>Описание</TableCell>
    </div>
  );
};

export default TableHeader;
