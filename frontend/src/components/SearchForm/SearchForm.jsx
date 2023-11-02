import styles from './SearchForm.module.css';
import Button from '../../components/MenuButton/MenuButton';

export const SearchForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // Tutaj dodaj logikę obsługi przesłania formularza
  };

  const urlSearchParams = new URLSearchParams(window.location.search);
  const query = urlSearchParams.get('query');

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.serchForm}>
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
        <Button>Search</Button>
      </div>
    </form>
  );
};
