"server only";
// import axios from "axios";
import type { PuplarMovies } from "../types";
import chalk from "chalk";

// const tmdbApi = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
//   params: {
//     api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
//     language: "ru",
//   },
// });

export const fetchPopularMovies = async (page = 1): Promise<PuplarMovies> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pl&page=${page}`,
    {
      next: { revalidate: 2000 },
    }
  );

  if (!res.ok) {
    throw new Error("Ошибка при получении популярных фильмов");
  }

  const timestamp = new Date().toISOString(); // Текущее время в формате ISO
  const requestType = "GET"; // Тип запроса (можно динамически менять)

  console.log(
    chalk.bgBlue.white(
      `[${timestamp}] [${requestType}] Fetching popular films for page: ${page}`
    )
  );

  const data = await res.json();
  return data as PuplarMovies;

  // console.log("fetch popular films");
  // const response = await tmdbApi.get("/movie/popular", {
  //   params: { page, language: "pl" },
  // });
  // return response.data;
};
