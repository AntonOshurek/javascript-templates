import styles from "./page.module.css";
import { fetchPopularMovies } from "./api/get-films";
import Image from "next/image";
import type { Movie, PuplarMovies } from "./types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const { page } = await props.searchParams;
  const movies: PuplarMovies = await fetchPopularMovies(page ? +page : 1);

  return (
    <div className={styles.page}>
      {movies.results?.map((item: Movie) => {
        return (
          <>
            <h1 key={item.id}>{item.title}</h1>{" "}
            <Image
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
              width={400}
              height={200}
              alt="sdf"
            />
          </>
        );
      })}
    </div>
  );
}
