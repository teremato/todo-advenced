import { FC } from 'react';
import { useAppSelector, useAuth } from '../../../hooks';
import styles from './page.module.scss';

interface PageProp {
  children: React.ReactNode; // any надо избегать.
}

export const Page: FC<PageProp> = ({ children }) => {
  // Не используется никак ?
  const auth = useAuth();
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <div className={isDark ? `${styles.page} ${styles.active}` : styles.page}>
      <div className={styles.page_content}>{children}</div>
    </div>
  );
};
