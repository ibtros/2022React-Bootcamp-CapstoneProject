import {
  AppBody,
  AppContainer,
  AppHeader,
  Footer,
  LogoImage,
  SearchBox,
  SearchForm,
  SearchIcon,
  SearchInput,
  ShoppingCart,
  ViewAllProductsButton,
} from './pages/styles/AppStylesCss';

import {Home} from './pages/Home';
import { ProductListPage } from './pages/ProductListPage';
import logo from './ibethHome.png';
import searchIcon from "./search-svgrepo-com.svg";
import shoppingCartImage from "./shopping-cart-full-sign-svgrepo-com.svg";
import { useState } from 'react';

function App() {
  const [enabledHomePage, setEnabledHomePage] = useState(true);
  
  return (
    <AppContainer>
      <AppHeader>
        <LogoImage src={logo} alt='logo' onClick={() => setEnabledHomePage(true)}/>
        <SearchForm>
          <SearchBox>
            <SearchInput type='text'/>
            <SearchIcon type='submit' src={searchIcon} alt='searchIcon' />
          </SearchBox>
        </SearchForm>
        <ShoppingCart src={shoppingCartImage} alt='shoppingCart' />
      </AppHeader>
      <AppBody>
        {
          enabledHomePage ? 
            <>
              <Home />
              <ViewAllProductsButton onClick={() => setEnabledHomePage(false)}>
                View all products
              </ViewAllProductsButton>
            </>
            : 
            <ProductListPage />
        }
      <Footer>
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </Footer>
      </AppBody>
    </AppContainer>
  );
}

export default App;
