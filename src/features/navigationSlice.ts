import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Sorting } from '../utils/constants';

export interface NavigationState {
  sorting: Sorting; // selected sorting method
  search: string; // search query
  pagesAmount: number; // amount of available pages
}

const initialState: NavigationState = {
  sorting: Sorting.id_asc,
  search: '',
  pagesAmount: 1,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setSorting: (state, { payload }: PayloadAction<Sorting>) => {
      state.sorting = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setPagesAmount: (state, { payload }: PayloadAction<number>) => {
      state.pagesAmount = payload;
    },
  },
});

export const { setSorting, setSearch, setPagesAmount } = navigationSlice.actions;

export default navigationSlice.reducer;
