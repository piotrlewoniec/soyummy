import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './SearchRecipesList.module.css';
import { useTheme } from '../../components/ToggleSwitch/ThemeContext';
import { Pagination } from '../../components/Pagination/Pagination'; // Importuj komponent paginacji

export const SearchedRecipesList = ({ recipes, error }) => {
  const { theme } = useTheme();

  const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recipes.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {error ? (
        <div className={styles.imageContainer}>
          <div className={styles.image} />
          <p
            className={`${styles.imageText} ${
              theme === 'dark' ? styles.darkTheme : ''
            }`}
          >
            Try looking for something else...
          </p>
        </div>
      ) : recipes && recipes.length > 0 ? (
        <>
          <ul className={styles.searchedRecipesList}>
            {currentItems.map((recipe, index) => (
              <li key={index}>
                <Link to={`/recipes/${recipe._id}`}>
                  <div className={styles.recipeItem}>
                    <div
                      className={styles.recipeImageWithText}
                      style={{ backgroundImage: `url(${recipe.thumb})` }}
                    >
                      <p
                        className={`${styles.recipeName} ${
                          theme === 'dark' ? styles.darkTheme : ''
                        }`}
                      >
                        {recipe.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.pagination}>
            <Pagination
              pageCount={Math.ceil(recipes.length / itemsPerPage)}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        <div className={styles.imageContainer}>
          <div className={styles.image} />
          <p
            className={`${styles.imageText} ${
              theme === 'dark' ? styles.darkTheme : ''
            }`}
          >
            Try looking for something else...
          </p>
        </div>
      )}
    </div>
  );
};
