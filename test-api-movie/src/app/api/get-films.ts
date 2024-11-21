"use server";
import type { PuplarMovies } from "../types";
import chalk from "chalk";

export const fetchPopularMovies = async (page = 1): Promise<PuplarMovies> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pl&page=${page}`,
    {
      next: { revalidate: 20 },
    }
  );

  if (!res.ok) {
    throw new Error("Ошибка при получении популярных фильмов");
  }

  const timestamp = new Date().toISOString();
  const requestType = "GET";

  console.log(
    chalk.bgBlue.white(
      `[${timestamp}] [${requestType}] Fetching popular films for page: ${page}`
    )
  );

  const data = await res.json();
  return data as PuplarMovies;
};
