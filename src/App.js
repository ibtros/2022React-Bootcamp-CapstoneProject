import {
  AppBody,
  AppContainer,
  AppHeader,
  Footer,
  LogoImage,
  ShoppingCart,
} from './pages/styles/AppStylesCss';
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Checkout } from './pages/Checkout';
import {Home} from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { ProductList } from './pages/ProductList';
import { Search } from './components/Search';
import { SearchResults } from './pages/SearchResults';
import { ShoppingCartContext } from './components/ShoppingCartContext';
import logo from './ibethHome.png';
import shoppingCartImage from './reusable-shopping-bag-svgrepo-com.svg';
import { useState } from 'react';

function App() {
  const [shoppingCart, setShoppingCart] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{shoppingCart, setShoppingCart}}>
      <Router>
        <AppContainer>
          <AppHeader>
            <Link to="/">
              <LogoImage src={logo} alt='logo'/>
            </Link>
            <Search />
            <Link to="/cart">
              <ShoppingCart src={shoppingCartImage} alt='shoppingCart' />
            </Link>
          </AppHeader>
          <AppBody>
            <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/" element={<Home />} />
              {/* <Route path="**" element={<Home />} /> */}
              {/*<Route path="**" element={<Home />} /> */}
              <Route path="*" element={<Navigate replace to="/"/>} />
              {/* <Route path="/">404</Route> */}
            </Routes>
          <Footer>
            Ecommerce created during Wizeline’s Academy React Bootcamp
          </Footer>
          </AppBody>
        </AppContainer>
      </Router>
    </ShoppingCartContext.Provider>
  );
}

export default App;
