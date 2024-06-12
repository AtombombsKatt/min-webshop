import React from 'react';
import { useTheme, getTheme} from '../Contexter/DarkmodeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faAdjust } from '@fortawesome/free-solid-svg-icons';
const DarkModeButton = ({ themeName }) => {
  const { theme, toggleTheme } = useTheme();
  const currentTheme = getTheme(theme);

  //växla tema med knapp
  const handleClick = () => {
    toggleTheme(themeName);
  };

  const getIcon = () => {
    switch (themeName) {
      case 'light':
        return <FontAwesomeIcon icon={faSun} />;
      case 'dark':
        return <FontAwesomeIcon icon={faMoon} />;
      case 'blue':
        return <FontAwesomeIcon icon={faAdjust} />;
      default:
        return null;
    }
  };

  return (
    <button
      className={`p-2 rounded ${theme === themeName ? 'active' : ''}`}
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
      }}
      onClick={handleClick}
    >
      {getIcon()}
    </button>
      );
    };


    export { DarkModeButton };