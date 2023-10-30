import styles from './NotFounPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} alt="Page Not Found" />
      <p className={styles.title}>We are sorry,</p>
      <p className={styles.description}>
        but the page you were looking for can’t be found..
      </p>
    </div>
  );
};
