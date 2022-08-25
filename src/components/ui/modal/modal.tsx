import { FC } from 'react';
import styles from './modal.module.scss';

interface ModalWindowProp {
  children: React.ReactNode;
  isOpen: boolean;
}

export const ModalWindow: FC<ModalWindowProp> = ({ children, isOpen }) => {
  return (
    <div
      className={isOpen ? `${styles.wrapper} ${styles.active}` : styles.wrapper}
    >
      {children}
    </div>
  );
};
