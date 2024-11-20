"use client";

import { ChangeEvent, useEffect, useState } from "react";
//LIBS
import classNames from "classnames";
//COMPONENTS
import SearchResultModal from "../search-result-modal/search-result-modal";
//STYLES
import style from "./search-bar.module.css";
//API
import { IMovieInSearch, searchMulti } from "@/app/api/search";

export default function SearchBar(): JSX.Element {
  const [result, setResult] = useState<IMovieInSearch[] | null>();
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onInputSearchParam = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(evt.target.value);
  };

  useEffect(() => {
    let handler: NodeJS.Timeout;

    if (searchQuery) {
      handler = setTimeout(() => {
        setDebouncedQuery(searchQuery);
      }, 800);
    } else {
      setResult(null);
    }

    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      searchMulti(debouncedQuery).then((res) => {
        if (res?.results) {
          setResult(res.results);
        } else {
          setResult(null);
        }
      });
    }
  }, [debouncedQuery]);

  const searchBarClasses = classNames(
    style["search-bar"],
    isFocused && style["search-bar--focus"]
  );

  return (
    <>
      <div className={searchBarClasses}>
        <input
          className={style["search-bar__input"]}
          type="text"
          onFocus={onFocus}
          onInput={onInputSearchParam}
          value={searchQuery}
        />
      </div>

      {isFocused && (
        <SearchResultModal onBlurListener={onBlur} searchQuery={result} />
      )}
    </>
  );
}
