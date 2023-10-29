import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import svgsprite from './symbol-defs.svg';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.soYummy}>
        <NavLink to="/">
          <svg className={styles.logoSvg}>
            <use href={`${svgsprite}#icon-logo`} />
          </svg>
          <p className={styles.brandName}>So Yummy</p>
        </NavLink>
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
      <div className={styles.socialsIcons}>
        <a href="https://facebook.com/">
          <svg className={styles.logoSvg2}>
            <use href={`${svgsprite}#icon-facebook`} />
          </svg>
        </a>
        <a href="https://youtube.com/">
          <svg className={styles.logoSvg2}>
            <use href={`${svgsprite}#icon-you-tube`} />
          </svg>
        </a>
        <a href="https://twitter.com/">
          <svg className={styles.logoSvg2}>
            <use href={`${svgsprite}#icon-twiter`} />
          </svg>
        </a>
        <a href="https://instagram.com/">
          <svg className={styles.logoSvg2}>
            <use href={`${svgsprite}#icon-instagram`} />
          </svg>
        </a>
      </div>

      <div className={styles.copyrights}>
        <p>© 2023 All Rights Reserved.</p>
        <a href="/tos">Terms of Service</a>
      </div>
    </div>
  );
};
