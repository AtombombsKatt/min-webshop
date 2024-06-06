import React from 'react';
import { Link } from 'react-router-dom';
import {DarkModeButton} from './DarkmodeBtn'; //hakparantes för namngiven export från modul
import { useTheme } from '../Contexter/DarkmodeContext';
import { useState } from 'react';
const Header = ({ onSearch }) => {
  const { currentTheme } = useTheme();
  const [searchWord, setSearchWord] = useState('');

  const handleInputChange = (event) => { //uppdatera sökord
    setSearchWord(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchWord);
    onSearch(searchWord);
  };
  return (
    <header style={{ backgroundColor: currentTheme.headerBackgroundColor, color: currentTheme.textColor }}>
      <nav>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <form onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          placeholder="Search for products..." 
          value={searchWord} 
          onChange={handleInputChange} 
        />
        <button type="submit">Search</button>
      </form>
        <div>
          <DarkModeButton themeName="light" />
          <DarkModeButton themeName="dark" />
          <DarkModeButton themeName="blue" />
        </div>
      </nav>
      
    </header>
  );
};

export default Header;