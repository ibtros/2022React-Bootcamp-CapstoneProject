// import './App.css';

import {Home} from './pages/Home';
import { ProductListPage } from './pages/ProductListPage';
import logo from './ibethHome.png';
import searchIcon from "./search-svgrepo-com.svg";
import shoppingCartImage from "./shopping-cart-full-sign-svgrepo-com.svg";
import styled from 'styled-components';
import { useState } from 'react';

// import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

const AppContainer = styled.div`
  text-align: center;
`;

const AppBody = styled.div`
  background-color: #f4efef;
  // background-color: #eadbcb;
`;

const AppHeader = styled.header`
  background-color: #dcc1a7;
  min-height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-right: 6vh;

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 4px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    padding-right: 3vh;
  }
`;

const LogoImage = styled.img`
  @media (max-width: 560px) {
    width: 300px;
    height: 80px;
    margin-bottom: 8px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    width: 350px;
    height: 100px;
  }
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
`;

const ShoppingCart = styled.img`
  max-height: 10vh;

  @media (max-width: 560px) {
    max-height: 8vh;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    max-height: 7vh;
    margin-left: 10px;
  }
`;

const SearchBox = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  border-radius: 10px;
  border: 1px solid white;
  font-size: 1.2rem;
  height: 30px;
  padding: 5px 30px 5px 10px;
  &:focus {
    outline: none;
    border: 1px solid #F88EC2;
    box-shadow: 0 0 5px #EBBED4;
  }
`;

const SearchIcon = styled.img`
  background: none;
  border: none;
  cursor: pointer;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  &:focus {
    outline: none;
    border: 1px solid #F88EC2;
    box-shadow: 0 0 5px #EBBED4;
  }
`;

const Footer = styled.footer`
  height: 150px;
  background-color: #dcc1a7;
  position: relative;
  margin-top: auto;
`;

const ViewAllProductsButton = styled.button`
  border-color: #d4b595;
  height: 30px;
  width: 160px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 20px;
  background-color: #d4b595;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`;

function App() {
  // const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);
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
