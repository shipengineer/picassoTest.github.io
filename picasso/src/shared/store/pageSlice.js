import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: 1,
  reducers: {
    increment: (state) => (state += 1),
  },
});
export const { increment } = pageSlice.actions;
export default pageSlice;
