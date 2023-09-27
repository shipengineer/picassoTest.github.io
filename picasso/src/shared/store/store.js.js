import { api } from "../api/api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import postSlice from "./postSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    postSlice: postSlice.reducer,
  },
  middleware: (getDeafaultMiddleware) =>
    getDeafaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);
