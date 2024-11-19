//STYLES
import style from "./search-result-modal.module.css";

interface Props {
  onBlurListener: () => void;
  searchQuery: string;
}

export default function SearchResultModal({
  onBlurListener,
  searchQuery,
}: Props): JSX.Element {
  return (
    <div className={style["search-result-modal"]}>
      <section className={style["search-result-modal__content"]}>
        <h2>Search result</h2>
        <p>{searchQuery}</p>
      </section>

      <div
        className={style["search-result-modal__bg"]}
        onClick={onBlurListener}
      ></div>
    </div>
  );
}
