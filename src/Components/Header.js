import React from 'react';
import { Link } from 'react-router-dom';
import {DarkModeButton} from './DarkmodeBtn'; //hakparantes för namngiven export från modul
import { useTheme } from '../Contexter/DarkmodeContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import LogoText from './LogoText';

const Header = ({ onSearch }) => {
  const { currentTheme } = useTheme();
  const [searchWord, setSearchWord] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (event) => { //uppdatera sökord
    setSearchWord(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchWord);
    onSearch(searchWord);
  };
  const handleCartClick = () => {
    navigate('/cart');
  };

  return ( //darkmode styles
    <header style={{ backgroundColor: currentTheme.headerBackgroundColor, color: currentTheme.textColor }}>
      <nav>
        <div>
          <Link to="/"> 
            <LogoText />
          </Link>
        </div>
        <form onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            placeholder="Search for products..." 
            value={searchWord} 
            onChange={handleInputChange} 
            className="w-48 px-2 py-1 rounded-md border"
          />
          <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2">Search</button>
        </form>

        <div className='flex flex-row items-center'>
          <div className="mr-2">
            <DarkModeButton themeName="light" />
          </div>
          <div className="mr-2">
            <DarkModeButton themeName="blue" />
          </div>
          <div className="mr-8">
            <DarkModeButton themeName="dark" />
          </div>
          <button onClick={handleCartClick} className= "bg-green-500 font-semibold rounded hover:bg-green-600">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </nav>
    </header>
      
  );
};

export default Header;

     

