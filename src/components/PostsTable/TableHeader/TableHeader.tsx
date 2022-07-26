import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import { getSorting, setSorting } from '../../../features/navigationSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppDispatch';
import { Sorting } from '../../../utils/constants';
import TableCell from '../TableCell/TableCell';

// type Props = {};

const TableHeader = (): JSX.Element => {
  const sorting = useAppSelector(getSorting);
  const dispatch = useAppDispatch();

  const iconProps = { className: 'ml-2 text-lg' };
  const getIcon = (desc: boolean) =>
    desc ? <FaAngleUp {...iconProps} /> : <FaAngleDown {...iconProps} />;

  return (
    <>
      <TableCell
        header={true}
        onClick={() => {
          dispatch(
            setSorting(sorting === Sorting.id_asc ? Sorting.id_desc : Sorting.id_asc),
          );
        }}
      >
        ID {getIcon(sorting === Sorting.id_asc)}
      </TableCell>
      <TableCell
        header={true}
        onClick={() => {
          dispatch(
            setSorting(
              sorting === Sorting.title_asc ? Sorting.title_desc : Sorting.title_asc,
            ),
          );
        }}
      >
        Заголовок {getIcon(sorting === Sorting.title_asc)}
      </TableCell>
      <TableCell
        header={true}
        onClick={() => {
          dispatch(
            setSorting(
              sorting === Sorting.body_asc ? Sorting.body_desc : Sorting.body_asc,
            ),
          );
        }}
      >
        Описание {getIcon(sorting === Sorting.body_asc)}
      </TableCell>
    </>
  );
};

export default TableHeader;
