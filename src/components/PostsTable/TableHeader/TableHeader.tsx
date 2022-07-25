import TableCell from '../TableCell/TableCell';

// type Props = {};

const TableHeader = (): JSX.Element => {
  return (
    <div>
      <TableCell header={true}>ID</TableCell>
      <TableCell header={true}>Заголовок</TableCell>
      <TableCell header={true}>Описание</TableCell>
    </div>
  );
};

export default TableHeader;
