import styles from './SearchForm.module.css';

export const SearchForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // Tutaj dodaj logikę obsługi przesłania formularza
  };

  const urlSearchParams = new URLSearchParams(window.location.search);
  const query = urlSearchParams.get('query');

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        autoComplete="off"
        autoFocus
        required
        minLength={3}
        placeholder="Search..."
        name="query"
        defaultValue={query}
      ></input>
      <button type="submit" className={styles.buttonSearch}>
        Search
      </button>
    </form>
  );
};
