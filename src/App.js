
import './App.css';
import { ThemeProvider, useTheme, getTheme } from './Contexter/DarkmodeContext';
import { UserIDProvider } from './Contexter/UserIdContext';
import { CartProvider } from './Contexter/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import SidebarCategories from './Components/SidebarCategories';
import Products from './Components/Products';
import ProductInfo from './Components/ProductInfo';

import Order from './Components/Order';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// npm install reactjs-popup
//npm install react-toastify
//npm install @fortawesome/free-regular-svg-icons

import SearchResults from './hooks/useSearchResult';
import useFetchCategories from './hooks/useFetchCategories';
import CartView from './views/CartView';
import { ToastContainer } from 'react-toastify';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
const AppContent = () => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchWord, setSearchWord] = useState('');
  

  const handleSelectCategory = (category) => { //gör egen krok för dom här sen
    setSelectedCategory(category.slug);
    setSearchWord(''); 
    navigate(`/products/category/${category.slug}`);
  };

  const handleSearch = (word) => {
    setSearchWord(word);
    setSelectedCategory(''); 
    navigate(`/products/search?q=${word}`);
  };
  
  
  return (
    
    <main className='container w-full m-0'
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        minHeight: '100vh' //ta bort?
      }}
    >
      
      <Header className='sticky top-0 p-4 flex z-10 w-full'onSearch={handleSearch}/>
      <div className='mainContent flex'>
      
      <div className='sidebar p-4 m-4   border border-gray-300 rounded-lg'
          style={{
            backgroundColor: currentTheme.sidebarBackgroundColor,
            color: currentTheme.textColor
          }}
          >
        <SidebarCategories onSelectCategory={handleSelectCategory}/>
      </div>
      
      <section className='content flex-1  m-4 w-full  border border-gray-300 rounded-lg' style={{
            backgroundColor: currentTheme.sidebarBackgroundColor,
            color: currentTheme.textColor
          }}>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:id' element={<ProductInfo />} />
              <Route path='/products/search' element={<SearchResults searchWord={searchWord} />} />
              <Route path='/products/category/:category' element={<Products />} />   
              <Route path='/order' element={<Order />} />
              <Route path='/cart' element={<CartView />} /> 
              
                
            </Routes>
      </section>
      </div>
      <Footer />
     
    </main>
  );
};

//appContent för att enkelt se providers som omsluter sidan
function App() {
  return (
    <ThemeProvider>
        <UserIDProvider>
          <CartProvider>
          <Router>
          <ToastContainer /> 
              <AppContent />  {/* allt samlas till jsx kod här*/}
          </Router>
          </CartProvider>
        </UserIDProvider>
    </ThemeProvider>
  );
}


export default App;


        