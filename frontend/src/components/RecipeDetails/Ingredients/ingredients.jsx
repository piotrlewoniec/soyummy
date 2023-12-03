import React, { useEffect, useState } from 'react';
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
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const ingredientData = useSelector(state => state.categories.ingr);
  const recipe = useSelector(state => state.categories.oneRecipe);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchOneRecipes({ id }));
      await dispatch(fetchIngredients());
      setDataFetched(true);
    };

    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    const storedIngredients =
      JSON.parse(localStorage.getItem('selectedIngredients')) || [];
    setSelectedIngredients(storedIngredients);
  }, []);

  const handleCheckboxChange = index => {
    const selectedIngredient = ajdikiigredientow[index];

    const isAlreadySelected = selectedIngredients.some(
      ingredient => ingredient._id === selectedIngredient._id
    );

    if (!isAlreadySelected) {
      const updatedSelectedIngredients = [
        ...selectedIngredients,
        { ...selectedIngredient, measure: measur[index] },
      ];
      setSelectedIngredients(updatedSelectedIngredients);
      localStorage.setItem(
        'selectedIngredients',
        JSON.stringify(updatedSelectedIngredients)
      );
    } else {
      const updatedSelectedIngredients = selectedIngredients.filter(
        ingredient => ingredient._id !== selectedIngredient._id
      );
      setSelectedIngredients(updatedSelectedIngredients);
      localStorage.setItem(
        'selectedIngredients',
        JSON.stringify(updatedSelectedIngredients)
      );
    }
  };

  if (!dataFetched) {
    return <div className={s.loading}>Loading... Please wait.</div>;
  }

  const ajdiki = recipe.ingredients.map(el => el.id);
  const measur = recipe.ingredients.map(el => el.measure);

  const ajdikiigredientow = ingredientData.filter(el =>
    ajdiki.includes(el._id)
  );

  return (
    <div className={s.title}>
      <div>
        {ajdikiigredientow.map((el, index) => (
          <div
            key={el._id}
            className={`${s.flexik} ${theme === 'dark' ? s.darkTheme : ''}`}
          >
            <div className={s.fl}>
              <img alt={el.ttl} className={s.img} src={el.thb} />
              <div
                className={`${s.ttl} ${theme === 'dark' ? s.darkTheme : ''}`}
              >
                {el.ttl}
              </div>
            </div>
            <div className={s.f}>
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
                onChange={() => handleCheckboxChange(index)}
                checked={selectedIngredients.some(
                  ingredient => ingredient._id === el._id
                )}
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
