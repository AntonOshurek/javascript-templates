import Link from "next/link";
//STYLES
import style from "./pagination.module.css";

interface Props {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: Props): JSX.Element {
  console.log(currentPage, totalPages);

  const maxVisiblePages = 11;

  const getPaginationRange = () => {
    const start = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    const end = Math.min(start + maxVisiblePages - 1, totalPages);

    const adjustedStart = Math.max(end - maxVisiblePages + 1, 1);
    return Array.from(
      { length: end - adjustedStart + 1 },
      (_, i) => adjustedStart + i
    );
  };

  const paginationRange = getPaginationRange();

  return (
    <div className={style.pagination}>
      <ul className={style.pagination__list}>
        {paginationRange[0] > 1 && (
          <>
            <li className={`${style.pagination__item}`}>
              <Link className={style.pagination__link} href={`/?page=1`}>
                1 page
              </Link>
            </li>
            {paginationRange[0] > 2 && <li>...</li>}
          </>
        )}
        {paginationRange.map((pageNum) => {
          return (
            <li
              className={`${style.pagination__item} ${
                pageNum === currentPage && style["pagination__item--current"]
              }`}
              key={pageNum}
            >
              <Link
                className={style.pagination__link}
                href={`/?page=${pageNum}`}
              >
                {pageNum}
              </Link>
            </li>
          );
        })}

        {currentPage < totalPages && (
          <div className={style.pagination__dots}>....</div>
        )}
      </ul>
    </div>
  );
}
