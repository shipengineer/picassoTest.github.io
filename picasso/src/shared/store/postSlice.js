import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 0,
  id: 0,
  title: "",
  body: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
});

export default postSlice;
