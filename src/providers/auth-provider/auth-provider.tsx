import { FC } from 'react';
import { useAuth } from '../../hooks';

interface AuthProviderProp {
  children: React.ReactNode; // опять any был
}

export const AuthProvider: FC<AuthProviderProp> = ({ children }) => {
  const { isAuth } = useAuth();

  return <div>{!isAuth ? children : ''}</div>;
};
