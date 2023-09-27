import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    firstFetch: build.query({
      query: () => `/posts?_limit=20`,

      // transformResponse: (response) => {
      //   const newResponce = [];
      //   newResponce.push(...response);
      //   console.log(newResponce);
      //   return newResponce;
      // },
    }),
    getPosts: build.query({
      query: (postNumber) => `/posts/${postNumber}`,
      transformResponse: (response) => {
        const newResponce = [];
        newResponce.concat(response);
        return newResponce;
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },

      merge: (currentCache, responseData) => {
        currentCache.push(...responseData);
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetPostsQuery, useFirstFetchQuery } = api;
