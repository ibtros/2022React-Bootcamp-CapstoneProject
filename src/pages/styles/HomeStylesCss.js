import styled from 'styled-components';

export const ProductCategoriesContainer = styled.div`
  align-items: center;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 2fr);
  justify-content: center;
  margin-bottom: 5vh;
  margin-left: 2vh;
  margin-right: 2vh;
  margin-top: 5vh;

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, 3fr);
  }

  @media (min-width: 561px) and (max-width: 820px) {
    grid-template-columns: repeat(2, 3fr);
  }
`;

export const Arrow = styled.img`
  height: 10vh;
  width: 10vh;

  @media (max-width: 560px) {
    height: 5vh;
    width: 5vh;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 8vh;
    width: 8vh;
  }
`;

export const LeftArrow = styled(Arrow)`
  margin-right: 10px;
  transform: rotate(-90deg);
`;

export const RightArrow = styled(Arrow)`
  margin-left: 10px;
  transform: rotate(90deg);
`;

export const ProductCategoryImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const ProductCategoryName = styled.div`
  background-color: #d4b595;
  font-family: Vegur, 'PT Sans', Verdana, sans-serif;
  font-size: 15px;
  font-weight: 300;
  padding-bottom: 8px;
  padding-top: 8px;
  width: 100%;
`;

export const FeaturedBannersContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
`;

export const FeaturedBannerImage = styled.img`
  height: 465px;
  margin-top: 5vh;
  width: 820px;

  @media (max-width: 560px) {
    height: 160px;
    width: 260px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 360px;
    width: 560px;
  }
`;

export const ViewAllProductsButton = styled.button`
  background-color: #d4b595;
  border-color: #c9c9c9;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  height: 35px;
  margin-bottom: 20px;
  width: 165px;
`;

export const ProductCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;