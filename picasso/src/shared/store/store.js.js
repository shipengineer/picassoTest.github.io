import { api } from "../api/api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import pageSlice from "./pageSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    pageSlice: pageSlice.reducer,
  },
  middleware: (getDeafaultMiddleware) =>
    getDeafaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);
