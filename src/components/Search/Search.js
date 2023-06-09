import React from "react";
import styles from "./search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(srch) => {
          setSearch(srch.target.value);
          setPageNumber(1);
        }}
        placeholder="Search Your Character"
        type="text"
        className={styles.input}
      />
    </form>
  );
};

export default Search;
