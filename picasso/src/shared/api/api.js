import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "https://jsonplaceholder.typicode.com/posts";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (arg) => ``,
      //   query: (arg) => `posts/${arg}`,
    }),
  }),
});

export const { useGetPostQuery } = api;
