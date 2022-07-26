import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../app/store';
import { setSorting } from '../../../features/navigationSlice';
import { Sorting } from '../../../utils/constants';
import TableCell from '../TableCell/TableCell';

// type Props = {};

const TableHeader = (): JSX.Element => {
  const { sorting } = useSelector((state: RootState) => state.navigation);
  const dispatch = useDispatch();

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
