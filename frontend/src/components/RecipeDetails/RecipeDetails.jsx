import { useDispatch, useSelector } from 'react-redux';
import s from './RecipeDetails.module.css';
import { useEffect } from 'react';
import { fetchOneRecipes } from 'redux/categories/actions';
import { useParams } from 'react-router-dom';
import Header from 'components/Header/Header';

export const RecipeDetails = ({ id }) => {
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.categories.oneRecipe);
  const state = useSelector(state => state.categories);

  useEffect(() => {
    const fetchData = async () => {
      console.log('id w akcji:', id);
      await dispatch(fetchOneRecipes({ id }));
      console.log('id', id);
      console.log('recipe', recipe);
      console.log('state', state);
    };

    fetchData();
  }, [dispatch, id]);

  console.log(recipe);

  return (
    <div>
      <div className={s.bg}>
        <div>
          <Header />
        </div>
        <div className={s.title}>{recipe.title}</div>

        <div className={s.desc}>{recipe.description}</div>
        <div className={s.btnplace}>
          <button>Add to favorite</button>{' '}
        </div>
        <div className={s.bgclock}>
          <span className={s.span}>{recipe.time}'</span>
        </div>
      </div>

      {/* <img src={recipe.thumb} /> */}
    </div>
  );
};
