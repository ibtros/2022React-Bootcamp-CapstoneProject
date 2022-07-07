import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppBody = styled.div`
  background-color: #f4efef;
`;

export const AppHeader = styled.header`
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

export const LogoImage = styled.img`
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

export const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
`;

export const ShoppingCartImage = styled.img`
  max-height: 10vh;
  margin-right: 5px;

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

export const Footer = styled.footer`
  height: 150px;
  background-color: #dcc1a7;
  position: relative;
  margin-top: auto;
`;
