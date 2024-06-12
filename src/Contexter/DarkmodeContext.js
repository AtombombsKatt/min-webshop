import React, { createContext, useState, useContext } from 'react';

const DarkmodeContext = createContext();

const themes = { // teman 
  light: {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    headerBackgroundColor: '#f1f1f1',
    footerBackgroundColor: '#e1e1e1',
    sidebarBackgroundColor: '#e1e1e1', 
  },
  dark: {
    backgroundColor: '#121212',
    textColor: '#ffffff',
    headerBackgroundColor: '#333333',
    footerBackgroundColor: '#232323',
    sidebarBackgroundColor: '#333333', 
  },
  blue: {
    backgroundColor: '#333333',
    textColor: '#ffffff',
    headerBackgroundColor: '#999999',
    footerBackgroundColor: '#003f7f',
    sidebarBackgroundColor: '#0056b3', 
    
  }
};
//theme usestate för att växla mellan teman
export const ThemeProvider = ({ children }) => {   
  const [theme, setTheme] = useState('light');

  const toggleTheme = (newTheme) => { 
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