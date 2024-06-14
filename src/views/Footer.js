import React from 'react';
import { useTheme } from '../Contexter/DarkmodeContext';
import LogoText from '../Components/LogoText';
const Footer = () => {
  const { currentTheme } = useTheme();
  return (
    <footer style={{ backgroundColor: currentTheme.headerBackgroundColor, color: currentTheme.textColor }}>
      
      <p>&copy; Hippo Days inc all rights reserved</p>
    </footer>
  );
};

export default Footer;