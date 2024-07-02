import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;
export const { changeFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
