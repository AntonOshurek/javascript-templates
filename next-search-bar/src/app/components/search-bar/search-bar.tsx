"use client";

import { ChangeEvent, useState } from "react";
//LIBS
import classNames from "classnames";
//COMPONENTS
import SearchResultModal from "../search-result-modal/search-result-modal";
//STYLES
import style from "./search-bar.module.css";

export default function SearchBar(): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onInputSearchParam = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(evt.target.value);
  };

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
        <SearchResultModal onBlurListener={onBlur} searchQuery={searchQuery} />
      )}
    </>
  );
}
