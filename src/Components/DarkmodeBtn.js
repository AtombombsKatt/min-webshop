import React from 'react';
import { useTheme, getTheme} from '../Contexter/DarkmodeContext';
import { ThemeProvider } from '../Contexter/DarkmodeContext'; //hämta funktionen, leverantör

const DarkModeButton = ({ themeName }) => {
  const { theme, toggleTheme } = useTheme();
  const currentTheme = getTheme(theme);

  const handleClick = () => {
    toggleTheme(themeName);
  };

  return (
    <button
      className={theme === themeName ? 'active' : ''}
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
      }}
      onClick={handleClick}
    >
      {themeName}
    </button>
  );
};

export { DarkModeButton };