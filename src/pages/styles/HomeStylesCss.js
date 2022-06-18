import styled from 'styled-components';

export const ProductCategoriesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5vh;
  margin-top: 5vh;
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
  height: 560px;
  opacity: 0;
  transition: 2s;
  width: 80%;
  
  &.loaded {
    opacity: 1;
  }

  @media (max-width: 560px) {
    height: 200px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 420px;
  }
`;

export const ProductCategoryName = styled.div`
  background-color: #d4b595;
  font-family: Vegur, 'PT Sans', Verdana, sans-serif;
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 8px;
  padding-top: 8px;
  width: 80%;
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
