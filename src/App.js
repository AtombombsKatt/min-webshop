import logo from './logo.svg';
import './App.css';
import { ThemeProvider, useTheme, getTheme } from './Contexter/DarkmodeContext';
import { FetchAPIProvider } from './Contexter/FetchAPIContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DarkModeButton from './Components/DarkmodeBtn';
import { FetchAPIContext } from './Contexter/FetchAPIContext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import SidebarCategories from './Components/SidebarCategories';
import Products from './Components/Products';
import ProductInfo from './Components/ProductInfo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './styles/styles.css';


const AppContent = () => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);

  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState('');
  const { searchProducts } = useContext(FetchAPIContext);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSearchWord(''); // Clear search Word when selecting a category
    navigate(`/products/${category}`);
  };
  const handleSearch = (Word) => {
   
    setSearchWord(Word);
    setSelectedCategory(''); // Clear selected category when searching
    console.log("funkar det nu ???: ", Word); // Lägg till denna rad
    navigate(`/products/search?q=${Word}`);
    searchProducts(Word); // Lägg till denna rad
  };
  return (
    <main className='container'
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        minHeight: '100vh'
      }}
    >
      
      <Header onSearch={handleSearch}/>
      <div className='mainContent'>
        
      <aside className='sidebar'>
        <SidebarCategories onSelectCategory={handleSelectCategory}/>
      </aside>
      <section className='content' >
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductInfo />} />
              <Route path="/products/search" element={<Products />} />
              <Route path="/products/category/:category" element={<Products />} />
              {/* <Route path="/products" element={<Products selectedCategory={selectedCategory} />} /> */}
              {/* <Route path="/products/:category" element={<Products selectedCategory={selectedCategory}/>} />
              <Route path="/products/search" element={<Products selectedCategory={selectedCategory} searchWord={searchWord} />} /> */}
            </Routes>
      </section>
      </div>
      <Footer/>
    </main>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <FetchAPIProvider>
          <AppContent />  {/* allt samlas till jsx kod här*/}
        </FetchAPIProvider>
      </Router>
    </ThemeProvider>
  );
}


export default App;