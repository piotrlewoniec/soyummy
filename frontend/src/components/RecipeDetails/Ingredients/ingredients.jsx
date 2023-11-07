import { useEffect, useState } from 'react';
import s from './ingredients.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredients, fetchOneRecipes } from 'redux/categories/actions';

export const Ingr = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [dataFetched, setDataFetched] = useState(false);

  const ingredientData = useSelector(state => state.categories.ingr);
  const recipe = useSelector(state => state.categories.oneRecipe);

  //   const state = useSelector(state => state.categories);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchOneRecipes({ id }));
      await dispatch(fetchIngredients());
      setDataFetched(true);
    };

    fetchData();
  }, [dispatch, id]);

  if (!dataFetched) {
    return <div>Loading... Please wait.</div>;
  }
  //   const recipeingr = recipe.map(el => el.ingredients);
  console.log('recipe', recipe.ingredients);
  console.log('ingredata', ingredientData);

  const ajdiki = recipe.ingredients.map(el => el.id);
  console.log('ajdiki', ajdiki);

  const ajdikiigredientow = ingredientData.filter(el =>
    ajdiki.includes(el._id)
  );

  //   const zwrot = ingredientData.filter(el => el.includes(ajdiki));
  console.log('redd', ajdikiigredientow);

  return (
    <div className={s.title}>
      <div>
        {ajdikiigredientow.map(el => (
          <div className={s.flexik}>
            <img src={el.thb} />
            <div>{el.ttl}</div>
            <div>{recipe.ingredients.measure}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
