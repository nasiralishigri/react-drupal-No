import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.skarchen.com" }),
  endpoints: (builder) => ({
    getArticle: builder.query({
      query: () => "/get/articles",
    }),
  }),
});

export const { useGetArticleQuery } = api;
