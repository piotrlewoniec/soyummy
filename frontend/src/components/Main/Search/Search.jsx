import { useNavigate, useSearchParams } from 'react-router-dom';
import s from './Search.module.css';

export const Search = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const valueInput = searchParams.get('query');

  const handleSearchFormInput = query => {
    navigate(`/search?query=${query}`);
  };

  const handleSubmit = () => {
    handleSearchFormInput(valueInput);
  };

  return (
    <div className={s.containerImage}>
      <div className={s.divFlex}>
        <div className={s.soYummy}>
          <span className={s.so}> So</span>Yummy
        </div>
        <div className={s.text}>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </div>
        <form onSubmit={handleSubmit} className={s.border}>
          <input
            type="text"
            name="query"
            onChange={e => {
              setSearchParams({ query: e.target.value });
            }}
            className={s.input}
            placeholder="Write something here"
          ></input>
          <button type="submit" className={s.button}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
