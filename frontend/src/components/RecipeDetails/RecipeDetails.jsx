import { useDispatch, useSelector } from 'react-redux';
import s from './RecipeDetails.module.css';
import { useEffect } from 'react';
import { fetchIngredients, fetchOneRecipes } from 'redux/categories/actions';
import { useParams } from 'react-router-dom';
import Header from 'components/Header/Header';

export const RecipeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.categories.oneRecipe);
  //   const ingredientData = useSelector(state => state.categories.ingr);

  //   const state = useSelector(state => state.categories);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchOneRecipes({ id }));
      await dispatch(fetchIngredients());
    };

    fetchData();
  }, [dispatch, id]);

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

      <div className={s.category}>
        <div className={s.ingredients}>Ingredients</div>
        <div className={s.zespanem}>
          Number<span className={s.add}>Add to list</span>
        </div>
      </div>

      <div></div>
    </div>
  );
};
