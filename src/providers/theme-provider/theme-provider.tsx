import { FC } from 'react';
import { useAppSelector } from '../../hooks';

interface ThemeProviderProp {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProp> = ({ children }) => {
  const { isDark } = useAppSelector((state) => state.theme);

  const DarkStyle = {
    backgroundColor: `rgb(56, 56, 59)`,
    color: `whitesmoke`,
    transition: `all .1s`,
  };

  return <div style={isDark ? DarkStyle : {}}>{children}</div>;
};
