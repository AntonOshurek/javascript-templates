"use server";

import queryString from "query-string";

export interface IMovieInSearch {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ISearchMulti {
  page: number;
  results: IMovieInSearch[];
  total_pages: number;
  total_results: number;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const searchMulti = async (
  query: string,
  page = 1
): Promise<ISearchMulti> => {
  const queryParams = {
    query,
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: "en-EN",
    page,
  };

  const queryStringified = queryString.stringify(queryParams);

  const baseUrl = `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/movie`;

  const requestpath = `${baseUrl}?${queryStringified}`;
  const res = await fetch(requestpath, options);

  console.log("res");

  return res.json();
};
