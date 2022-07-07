import {
  AppBody,
  AppContainer,
  AppHeader,
  Footer,
  LogoImage,
  ShoppingCartContainer,
  ShoppingCartImage,
} from './pages/styles/AppStylesCss';
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Checkout } from './pages/Checkout';
import {Home} from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { ProductList } from './pages/ProductList';
import { Search } from './components/Search';
import { SearchResults } from './pages/SearchResults';
import { ShoppingCart } from './pages/ShoppingCart';
import { ShoppingCartContext } from './components/ShoppingCartContext';
import logo from './ibethHome.png';
import shoppingCartImage from './reusable-shopping-bag-svgrepo-com.svg';
import { shoppingCartReducer } from './components/shoppingCartReducer';
import { useReducer } from 'react';

function App() {
  const [shoppingCartState, dispatch] = useReducer(shoppingCartReducer, []);

  const getShoppingCartQuantity = () => {
    return shoppingCartState.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);;
  };

  return (
    <ShoppingCartContext.Provider value={{shoppingCartState, dispatch}}>
      <Router>
        <AppContainer>
          <AppHeader>
            <Link to="/">
              <LogoImage src={logo} alt='logo'/>
            </Link>
            <Search />
            <ShoppingCartContainer>
              <Link to="/cart">
                <ShoppingCartImage src={shoppingCartImage} alt='shoppingCart' />
              </Link>
              <span>{shoppingCartState.length > 0 && getShoppingCartQuantity()}</span>
            </ShoppingCartContainer>
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
