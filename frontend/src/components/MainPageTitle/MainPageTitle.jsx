import styles from './MainPageTitle.module.css';

export const MainPageTitle = ({ title }) => {
  return (
    <section className={styles.mainPageSection}>
      <div className={styles.container}>
        <div className={styles.element + ' ' + styles.element_one} />
        <div className={styles.element + ' ' + styles.element_two} />
        <div className={styles.element + ' ' + styles.element_three} />
        <h2 className={styles.title}>{title}</h2>
      </div>
    </section>
  );
};
