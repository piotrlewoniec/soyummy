import { useDispatch, useSelector } from 'react-redux';
import s from './RecipeDetails.module.css';
import { useEffect, useState } from 'react';
import { fetchIngredients, fetchOneRecipes } from 'redux/categories/actions';
import { useParams } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

export const RecipeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.categories.oneRecipe);
  const [dataFetched, setDataFetched] = useState(false);

  //   const ingredientData = useSelector(state => state.categories.ingr);

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
  const instructions = recipe.instructions;

  const steps = instructions.split('\r\n');

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
      <div>Tutaj ingredienty</div>
      <div className={s.fotodiv}>
        <ol>
          {steps.map((step, index) => (
            <li key={index}>{`${step}`}</li>
          ))}
        </ol>
        <img className={s.foto} src={recipe.thumb} alt={recipe.title} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
