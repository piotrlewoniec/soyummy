import { useEffect, useState } from 'react';
import s from './ingredients.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredients, fetchOneRecipes } from 'redux/categories/actions';
import { useTheme } from '../../../components/ToggleSwitch/ThemeContext';

export const Ingr = () => {
  const { theme } = useTheme();
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
    return <div className={s.loading}>Loading... Please wait.</div>;
  }
  //   const recipeingr = recipe.map(el => el.ingredients);
  console.log('recipe', recipe.ingredients);
  console.log('ingredata', ingredientData);

  const ajdiki = recipe.ingredients.map(el => el.id);
  const measur = recipe.ingredients.map(el => el.measure);
  console.log('measure', measur);
  console.log('ajdiki', ajdiki);

  const ajdikiigredientow = ingredientData.filter(el =>
    ajdiki.includes(el._id)
  );

  //   const zwrot = ingredientData.filter(el => el.includes(ajdiki));
  console.log('redd', ajdikiigredientow);

  return (
    <div className={s.title}>
      <div>
        {ajdikiigredientow.map((el, index) => (
          <div className={`${s.flexik} ${theme === 'dark' ? s.darkTheme : ''}`}>
            <div className={s.fl}>
              {' '}
              <img alt={el.ttl} className={s.img} src={el.thb} />
              <div
                className={`${s.ttl} ${theme === 'dark' ? s.darkTheme : ''}`}
              >
                {el.ttl}
              </div>
            </div>
            <div className={s.f}>
              {' '}
              <div
                className={`${s.measure} ${
                  theme === 'dark' ? s.darkTheme : ''
                }`}
              >
                {measur[index]}
              </div>
            </div>
            <div className={s.checkboxContainer}>
              <input
                className={`${s.checkbox} ${
                  theme === 'dark' ? s.darkTheme : ''
                }`}
                type="checkbox"
                id={`ingredientCheckbox-${index}`}
              />
              <label
                htmlFor={`ingredientCheckbox-${index}`}
                className={`${s.checkboxLabel} ${
                  theme === 'dark' ? s.darkTheme : ''
                }`}
              ></label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
