import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import svgsprite from '../../assets/icons/icons.svg';

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.elements}>
          <div className={styles.description}>
            <div className={styles.descriptionBody}>
              <div className={styles.soYummy}>
                <NavLink to="/">
                  <svg className={styles.logoSvg}>
                    <use href={`${svgsprite}#icon-logo`} />
                  </svg>
                  <p className={styles.brandName}>So Yummy</p>
                </NavLink>
              </div>

              <ul className={styles.descriptionList}>
                <li>Database of recipes that can be replenished </li>
                <li>Flexible search for desired and unwanted ingredients</li>
                <li>Ability to add your own recipes with photos</li>
                <li>Convenient and easy to use</li>
              </ul>
            </div>
            <div className={styles.navMenu}>
              <NavLink to="/">Ingredients</NavLink>
              <NavLink to="/">Add recipes</NavLink>
              <NavLink to="/">My recipes</NavLink>
              <NavLink to="/">Favorite</NavLink>
              <NavLink to="/">Shopping list</NavLink>
            </div>
          </div>
          <form className={styles.subscription}>
            <div className={styles.newsletterInvite}>
              <p>Subscribe to our Newsletter</p>
              <span>
                Subscribe up to our newsletter. Be in touch with latest news and
                special offers, etc.
              </span>
            </div>
            <label>
              <svg className={styles.subscriptionInputIcon}>
                <use href={`${svgsprite}#icon-input-envelope`} />
              </svg>
              <input
                id="subscriptionEmail"
                type="text"
                placeholder="Enter your email address"
                className={styles.subscriptionEmail}
              ></input>
            </label>
            <button
              id="subscriptionButton"
              className={styles.subscriptionButton}
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className={styles.socialsIcons}>
          <a href="https://facebook.com/">
            <svg className={styles.logoSvg2}>
              <use href={`${svgsprite}#icon-facebook`} />
            </svg>
          </a>
          <a href="https://youtube.com/">
            <svg className={styles.logoSvg2}>
              <use href={`${svgsprite}#icon-youtube`} />
            </svg>
          </a>
          <a href="https://twitter.com/">
            <svg className={styles.logoSvg2}>
              <use href={`${svgsprite}#icon-twitter`} />
            </svg>
          </a>
          <a href="https://instagram.com/">
            <svg className={styles.logoSvg2}>
              <use href={`${svgsprite}#icon-instagram`} />
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.copyrights}>
        <p>© 2023 All Rights Reserved.</p>
        <a href="/tos">Terms of Service</a>
      </div>
    </section>
  );
};
