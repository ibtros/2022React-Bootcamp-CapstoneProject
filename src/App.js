import {
  AppBody,
  AppContainer,
  AppHeader,
  Footer,
  LogoImage,
  ShoppingCart,
} from './pages/styles/AppStylesCss';
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import {Home} from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { ProductListPage } from './pages/ProductListPage';
import { Search } from './components/Search';
import logo from './ibethHome.png';
import shoppingCartImage from './shopping-cart-full-sign-svgrepo-com.svg';

function App() {
  return (
    <Router>
      <AppContainer>
        <AppHeader>
          <Link to="/">
            <LogoImage src={logo} alt='logo'/>
          </Link>
          <Search />
          <ShoppingCart src={shoppingCartImage} alt='shoppingCart' />
        </AppHeader>
        <AppBody>
          <Routes>
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
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
  );
}

export default App;
