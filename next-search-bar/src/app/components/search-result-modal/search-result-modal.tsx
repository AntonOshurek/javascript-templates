import Image from "next/image";
//STYLES
import style from "./search-result-modal.module.css";
//API
import { IMovieInSearch } from "@/app/api/search";

interface Props {
  onBlurListener: () => void;
  searchQuery: IMovieInSearch[] | null | undefined;
}

export default function SearchResultModal({
  onBlurListener,
  searchQuery,
}: Props): JSX.Element {
  return (
    <div className={style["search-result-modal"]}>
      <section className={style["search-result-modal__content"]}>
        <h2>Search result</h2>
        {searchQuery &&
          searchQuery.map((item) => {
            return (
              <div className={style["search-result-modal__item"]} key={item.id}>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.overview}</p>
                </div>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt="sd"
                  width={400}
                  height={200}
                />
              </div>
            );
          })}
      </section>

      <div
        className={style["search-result-modal__bg"]}
        onClick={onBlurListener}
      ></div>
    </div>
  );
}
