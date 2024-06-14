
//conext providers
import { ThemeProvider, useTheme, getTheme } from './Contexter/DarkmodeContext';
import { UserIDProvider } from './Contexter/UserIdContext';
import { CartProvider } from './Contexter/CartContext';
//router
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
//komponenter att rendera
import Header from './views/Header';
import Footer from './views/Footer';
import Home from './views/Home';
import SidebarCategories from './views/SidebarCategories';
import Products from './views/Products';
import ProductInfo from './views/ProductInfo';
import Order from './views/Order';
import CartView from './views/CartView'; 

import { useState } from 'react';



import SearchResults from './views/SearchResult';

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
  

  const handleSelectCategory = (category) => { //gör egen krok för dom här sen?
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
        minHeight: '100vh' 
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


        