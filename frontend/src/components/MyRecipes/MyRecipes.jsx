import styles from './MyRecipes.module.css';
import svgsprite from '../../assets/icons/icons.svg';
export const MyRecipes = () => {
  return (
    <div className={styles.containerMyRecipes}>
      <div className={styles.recipeContainer}>
        <img className={styles.recipePhoto} />
        <div className={styles.recipeInfo}>
          <p className={styles.recipeTitle}>Apple Frangipan Tart</p>
          <span className={styles.recipeDescription}>
            Apple Frangipane Tart is a classic and elegant treat fit for any
            dessert table. A crisp, sweet-crust is filled with rich almond
            frangipane filling, baked with sliced apples and finished with
            apricot preserves.
          </span>
          <span className={styles.recipeShortDescription}>
            We threw a ladies Melbourne Cup lunch and this was our dessert.
            Super quick to prepare using store bought pastry.
          </span>
          <span className={styles.recipePrepTime}>20 min</span>
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
      <div className={styles.pagination}>
        <button className={styles.arrowButton}>
          <svg className={styles.arrowButtonIcon}>
            <use href={`${svgsprite}#icon-pagination-arrow-left`} />
          </svg>
        </button>
        <button className={styles.pageNumberButtonActive}>
          <span>1</span>
        </button>
        <button className={styles.pageNumberButton}>
          <span>2</span>
        </button>
        <button className={styles.pageNumberButton}>
          <span>3</span>
        </button>
        <button className={styles.pageNumberButton}>
          <span>4</span>
        </button>
        <button className={styles.pageNumberButton}>
          <span>5</span>
        </button>
        <button className={styles.arrowButton}>
          <svg className={styles.arrowButtonIcon}>
            <use href={`${svgsprite}#icon-pagination-arrow-right`} />
          </svg>
        </button>
      </div>
    </div>
  );
};
