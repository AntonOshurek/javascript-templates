"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
//LIBS
import classNames from "classnames";
//COMPONENTS
import SearchResultModal from "../search-result-modal/search-result-modal";
//STYLES
import style from "./search-bar.module.css";
import { useActiveTyping } from "@/app/hooks/use-active-typing";

export default function SearchBar(): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { typedText, clearTypedText } = useActiveTyping(1000);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocus = () => {
    setIsFocused(true);
    clearTypedText();
  };

  const onBlur = () => {
    setIsFocused(false);
    clearTypedText();
  };

  const onInputSearchParam = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(evt.target.value);
  };

  useEffect(() => {
    if (!isFocused && inputRef.current && typedText.length > 3) {
      setSearchQuery(searchQuery + typedText);
      setIsFocused(true);
      inputRef.current.focus();
      clearTypedText();
    }
  }, [typedText, clearTypedText, isFocused, searchQuery]);

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
          ref={inputRef}
        />
      </div>

      {isFocused && (
        <SearchResultModal onBlurListener={onBlur} searchQuery={searchQuery} />
      )}
    </>
  );
}
