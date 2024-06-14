import React from 'react';
import { useTheme } from '../Contexter/DarkmodeContext';
const Footer = () => {
  const { currentTheme } = useTheme();
  return (
    <footer style={{ backgroundColor: currentTheme.headerBackgroundColor, color: currentTheme.textColor }}>
      
      <p>&copy; Hippo Days inc all rights reserved</p>
    </footer>
  );
};

export default Footer;