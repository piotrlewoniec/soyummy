import styles from './MainPageTitle.module.css';

export const MainPageTitle = ({ title }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.element + ' ' + styles.element_one} />
        <div className={styles.element + ' ' + styles.element_two} />
        <div className={styles.element + ' ' + styles.element_three} />
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.element_three} />
      </div>
    </div>
  );
};
