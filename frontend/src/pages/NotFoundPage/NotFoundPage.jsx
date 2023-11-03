import styles from './NotFounPage.module.css';
import Header from '../../components/Header/Header';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import { Footer } from 'components/Footer/Footer';
export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MainPageTitle title="" />
      <div className={styles.image} />
      <p className={styles.title}>We are sorry,</p>
      <p className={styles.description}>
        but the page you were looking for can’t be found..
      </p>
      <Footer />
    </div>
  );
};
