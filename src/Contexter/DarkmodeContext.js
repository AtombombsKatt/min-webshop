import React, { createContext, useState, useContext } from 'react';

const DarkmodeContext = createContext();

const themes = { //bakgrunds teman object
  light: {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    headerBackgroundColor: '#f1f1f1',
    footerBackgroundColor: '#e1e1e1',
  },
  dark: {
    backgroundColor: '#121212',
    textColor: '#ffffff',
    headerBackgroundColor: '#333333',
    footerBackgroundColor: '#232323',
  },
  blue: {
    backgroundColor: '#007bff',
    textColor: '#ffffff',
    headerBackgroundColor: '#0056b3',
    footerBackgroundColor: '#003f7f',
  }
};
export const ThemeProvider = ({ children }) => {   //theme usestate för att veta vilket somn e valt
  const [theme, setTheme] = useState('light');

  const toggleTheme = (newTheme) => { //funktion för o växla mellan teman
    setTheme(newTheme);
  };

  return (
    <DarkmodeContext.Provider value={{ theme, toggleTheme,currentTheme: themes[theme]  }}> 
      {children}
    </DarkmodeContext.Provider>
  );  //themes[theme] samma sak som theme['light'] tilldela currutenTheme
};

export const useTheme = () => useContext(DarkmodeContext);
export const getTheme = (themeName) => themes[themeName];