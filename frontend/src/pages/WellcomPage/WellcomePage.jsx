import { AuthNav } from '../../components/AuthNav/AuthNav';
import styles from './WellcomePage.module.css';
export const WelcomePage = () => {
  return (
    <div className={styles.wellcomePageBackground}>
      <AuthNav />
    </div>
  );
};
