import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 560px) {
    flex-direction: column;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  background-color: #eadbcb;
  height: auto;
  width: 18%;

  @media (max-width: 560px) {
    height: 10%;
    width: 100%;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 10%;
    width: 100%;
  }
`;

export const SidebarList = styled.ul`
  height: auto;
  margin: 0%;
  padding: 10px;
  width: auto;

  @media (max-width: 560px) {
    margin: 0%;  
    padding: 0px;
  }
  
  @media (min-width: 561px) and (max-width: 820px) {
    display: flex;
    flex-direction: row;
    margin: 0%;  
    padding: 0px;
  }
`;

export const SidebarElement = styled.li`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 50px;
  list-style-type: none;
  width: 100%;

  &:hover {
    background-color: #e3ceb9;
    cursor: pointer;
  }

  &.active {
    background-color: #dcc1a7;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    justify-content: center;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 82%;
  
  @media (max-width: 560px) {
    width: 100%;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    width: 100%;
  }
`;

export const PaginationControls = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2%
`;

export const ChangePageArrow = styled.img`
  height: 7vh;
  width: 7vh;
  cursor: pointer;

  @media (min-width: 1px) and (max-width: 820px) {
    height: 5vh;
    width: 5vh;
  }
`;

export const PreviousPage = styled(ChangePageArrow)`
  margin-right: 10px;
  transform: rotate(-90deg);
`;

export const NextPage = styled(ChangePageArrow)`
  margin-left: 10px;
  transform: rotate(90deg);
`;

export const CurrentPageIndicator = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4vh;
  margin-left: 25px;
  margin-right: 25px;
  padding-top: 8px;

  @media (max-width: 560px) {
    font-size: 25px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    font-size: 35px;
  }
`;
