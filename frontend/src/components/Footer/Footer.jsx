import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.soYummy}>
        <svg className={styles.logoSvg}>
          <use xlinkHref="/assets/icons/symbol-defs.svg#icon-logo" />
        </svg>
        <p className={styles.brandName}>So Yummy</p>
      </div>
      <div className={styles.navMenu}>
        <NavLink to="/">Ingredients</NavLink>
        <NavLink to="/">Add recipes</NavLink>
        <NavLink to="/">My recipes</NavLink>
        <NavLink to="/">Favorite</NavLink>
        <NavLink to="/">Shopping list</NavLink>
      </div>
      <form className={styles.subscription}>
        <input
          id="subscriptionEmail"
          className={styles.subscriptionEmail}
          type="text"
          placeholder="Enter your email address"
        ></input>
        <button
          id="subscriptionButton"
          className={styles.subscriptionButton}
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
