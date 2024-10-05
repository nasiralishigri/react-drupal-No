import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.skarchen.com" }),
  endpoints: (builder) => ({
    getArticle: builder.query({
      query: () => "/get/articles",
    }),
    createArticle: builder.mutation({
      query: (data) => ({
        url: "/add/articles",
        method: "POST",
        body: data,
      }),
    }),
    cacheClear: builder.mutation({
      query: () => ({
        url: "/rest/clear/all/caches?_format=json",
        method: "POST",
        body:{}
      }),
    }),
  }),
});
// https://www.skarchen.com/add/articles

export const { useGetArticleQuery, useCreateArticleMutation,useCacheClearMutation  } = api;
