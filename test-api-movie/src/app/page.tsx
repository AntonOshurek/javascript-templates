import Image from "next/image";
//STYLES
import styles from "./page.module.css";
//COMPONENTS
import { Pagination } from "@/components";
//API
import { fetchPopularMovies } from "./api/get-films";
//TYPES
import type { Movie, PuplarMovies } from "./types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const { page } = await props.searchParams;
  const movies: PuplarMovies = await fetchPopularMovies(page ? +page : 1);

  return (
    <main className={styles.page}>
      <Pagination
        currentPage={page ? +page : 1}
        totalPages={movies.total_pages}
      />
      <ul className={styles.list}>
        {movies.results?.map((item: Movie) => {
          return (
            <li className={styles.list__item} key={item.id}>
              <h1 className={styles.title}>{item.title}</h1>{" "}
              <Image
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                width={500}
                height={200}
                alt="sdf"
              />
            </li>
          );
        })}
      </ul>

      <Pagination
        currentPage={page ? +page : 1}
        totalPages={movies.total_pages}
      />
    </main>
  );
}
