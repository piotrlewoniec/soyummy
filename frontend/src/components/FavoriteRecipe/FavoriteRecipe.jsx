import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { refreshUser } from 'redux/userAPI/actions';
import { Pagination } from '../../components/Pagination/Pagination';
import { Loader } from '../../components/Loader/Loader';
import styles from './FavoriteRecipe.module.css';
import svgsprite from '../../assets/icons/icons.svg';
import { useTheme } from '../../components/ToggleSwitch/ThemeContext';

export const FavoriteRecipe = () => {
  const navigate = useNavigate();
  const [favoriteRecipesData, setFavoriteRecipesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const { theme } = useTheme();

  useEffect(() => {
    refreshUser();
  }, []);

  useEffect(() => {
    const fetchFavoriteRecipesData = async () => {
      const favorites =
        JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      const recipeData = [];

      for (const favorite of favorites) {
        try {
          const response = await fetch(
            `https://soyummy-gilt.vercel.app/soyummy/favorites/recipes/${favorite._id}`
          );

          if (!response.ok) {
            throw new Error(
              `Błąd podczas pobierania przepisu o ID: ${favorite._id}`
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
  }, []);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFavoriteRecipes = favoriteRecipesData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleDelete = recipeId => {
    const currentFavorites =
      JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const updatedFavorites = currentFavorites.filter(
      favorite => favorite._id !== recipeId
    );

    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
    alert('Recipe removed from favorites!');
  };

  const handleOpenRecipe = recipeId => {
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <div className={styles.containerFavorites}>
      {currentFavoriteRecipes.length > 0 ? (
        currentFavoriteRecipes.map((recipeData, index) => (
          <div
            key={index}
            className={`${styles.favoriteContainer} ${
              theme === 'dark' ? styles.darkTheme : ''
            }`}
          >
            <img
              alt={recipeData.recipes[0].title}
              className={styles.favoritePhoto}
              src={recipeData.recipes[0].preview}
            />
            <div className={styles.favoriteInfo}>
              <p
                className={`${styles.favoriteTitle} ${
                  theme === 'dark' ? styles.darkTheme : ''
                }`}
              >
                {recipeData.recipes[0].title}
              </p>
              <span
                className={`${styles.favoriteDescription} ${
                  theme === 'dark' ? styles.darkTheme : ''
                }`}
              >
                {recipeData.recipes[0].description}
              </span>

              <span
                className={`${styles.favoritePrepTime} ${
                  theme === 'dark' ? styles.darkTheme : ''
                }`}
              >
                {recipeData.recipes[0].time} min
              </span>
              <button
                className={`${styles.deleteButton} ${
                  theme === 'dark' ? styles.darkTheme : ''
                }`}
                onClick={() => handleDelete(recipeData.recipes[0]._id)}
              >
                <svg
                  className={`${styles.deleteIcon} ${
                    theme === 'dark' ? styles.darkTheme : ''
                  }`}
                >
                  <use href={`${svgsprite}#icon-trash`} />
                </svg>
              </button>
              <button
                className={`${styles.openRecipeButton} ${
                  theme === 'dark' ? styles.darkTheme : ''
                }`}
                onClick={() => handleOpenRecipe(recipeData.recipes[0]._id)}
              >
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
