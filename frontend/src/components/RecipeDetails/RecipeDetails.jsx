import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchIngredients, fetchOneRecipes } from 'redux/categories/actions';
import { useParams } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Ingr } from './Ingredients/ingredients';
import { Loader } from '../../components/Loader/Loader';
import { useTheme } from '../../components/ToggleSwitch/ThemeContext';
import { useSelector } from 'react-redux';
import s from './RecipeDetails.module.css';

export const RecipeDetails = () => {
  const { theme } = useTheme();
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.categories.oneRecipe);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchOneRecipes({ id }));
      await dispatch(fetchIngredients());
      setDataFetched(true);
    };

    fetchData();
  }, [dispatch, id]);

  if (!dataFetched) {
    return (
      <div
        className={`${s.loaderContainer} ${
          theme === 'dark' ? s.darkTheme : ''
        }`}
      >
        <Loader />
      </div>
    );
  }

  const instructions = recipe.instructions;
  const steps = instructions.split('\r\n');

  const handleAddToFavorites = () => {
    const currentFavorites =
      JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

    const isAlreadyFavorite = currentFavorites.some(
      favorite => favorite._id === recipe._id
    );

    if (!isAlreadyFavorite) {
      currentFavorites.push({ _id: recipe._id, title: recipe.title });
      localStorage.setItem('favoriteRecipes', JSON.stringify(currentFavorites));
      alert('Recipe added to favorites!');
    } else {
      alert('Recipe is already in favorites!');
    }
  };

  return (
    <div>
      <div className={s.bg}>
        <div>
          <Header />
        </div>
        <div className={s.recipe}>
          <div className={s.title}>{recipe.title}</div>
          <div className={s.desc}>{recipe.description}</div>
          <button className={s.btnplace} onClick={handleAddToFavorites}>
            Add to favorite recipes
          </button>
          <div className={s.bgclock}>
            <div className={s.clock}></div>
            <span className={s.span}>{recipe.time}'</span>
          </div>
        </div>
      </div>

      <div className={s.category}>
        <div className={s.ingredients}>Ingredients</div>
        <div className={s.zespanem}>Number</div>
        <div className={s.add}>Add to list</div>
      </div>
      <div>
        <Ingr />
      </div>
      <div className={s.fotodiv}>
        <div className={s.orientation}>
          <p
            className={`${s.recipePreparation} ${
              theme === 'dark' ? s.darkTheme : ''
            }`}
          >
            Recipe Preparation
          </p>
          <ol>
            {steps.map((step, index) => (
              <li
                className={`${s.czcionka} ${
                  theme === 'dark' ? s.darkTheme : ''
                }`}
                key={index}
              >{`${step}`}</li>
            ))}
          </ol>
        </div>
        <img className={s.foto} src={recipe.thumb} alt={recipe.title} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
