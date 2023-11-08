import styles from './FavoriteRecipe.module.css';
import svgsprite from '../../assets/icons/icons.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/userAPI/actions';
export const FavoriteRecipe = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(state => state.auth);
  const [favoriteRecipesData, setFavoriteRecipesData] = useState([]);
  console.log(favorites);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  useEffect(() => {
    const fetchFavoriteRecipesData = async () => {
      const recipeData = [];

      for (const recipeId of favorites) {
        try {
          const response = await fetch(
            `https://soyummy-gilt.vercel.app/soyummy/favorites/recipes/${recipeId}`
          );

          if (!response.ok) {
            throw new Error(
              `Błąd podczas pobierania przepisu o ID: ${recipeId}`
            );
          }

          const data = await response.json();
          recipeData.push(data);
        } catch (error) {
          console.error(error);
        }
      }

      setFavoriteRecipesData(recipeData);
    };

    fetchFavoriteRecipesData();
  }, [favorites]);
  console.log(favoriteRecipesData, 'test');
  return (
    <div className={styles.containerFavorites}>
      {favoriteRecipesData.length > 0 ? (
        favoriteRecipesData.map((recipeData, index) => (
          <div key={index} className={styles.favoriteContainer}>
            <img
              alt={recipeData.recipes[0].title}
              className={styles.favoritePhoto}
              src={recipeData.recipes[0].preview}
            />
            <div className={styles.favoriteInfo}>
              <p className={styles.favoriteTitle}>
                {recipeData.recipes[0].title}
              </p>
              <span className={styles.favoriteDescription}>
                {recipeData.recipes[0].description}
              </span>
              <span className={styles.favoriteShortDescription}>
                Tutaj powinien być fajny opis autora tego dania ale niestety nie
                dostarczono go nam. :3 Dlatego póki co jest go brak
              </span>
              <span className={styles.favoritePrepTime}>
                {recipeData.recipes[0].time} min
              </span>
              <button className={styles.deleteButton}>
                <svg className={styles.deleteIcon}>
                  <use href={`${svgsprite}#icon-trash`} />
                </svg>
              </button>
              <button className={styles.openRecipeButton}>
                <span>See recipes</span>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
      {/* ---------------------------------- */}
    </div>
  );
};
