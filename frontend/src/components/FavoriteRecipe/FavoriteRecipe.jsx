import styles from './FavoriteRecipe.module.css';
import svgsprite from '../../assets/icons/icons.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/userAPI/actions';
import { Pagination } from '../../components/Pagination/Pagination';
import { Loader } from '../../components/Loader/Loader';

export const FavoriteRecipe = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(state => state.auth);
  const [favoriteRecipesData, setFavoriteRecipesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFavoriteRecipes = favoriteRecipesData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className={styles.containerFavorites}>
      {currentFavoriteRecipes.length > 0 ? (
        currentFavoriteRecipes.map((recipeData, index) => (
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
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      )}
      <div className={styles.pagination}>
        <Pagination
          pageCount={Math.ceil(favoriteRecipesData.length / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
