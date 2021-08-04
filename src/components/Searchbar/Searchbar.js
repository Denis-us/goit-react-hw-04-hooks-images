import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../Icon/search_icon.svg";
import { toast } from "react-toastify";
import styles from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState("");

  const handleNameChange = (e) => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim() === "") {
      toast.error("Введите название картинки");
      return;
    }

    onSubmit(search);
    setSearch("");
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <SearchIcon width="25" height="25" />
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={search}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}
