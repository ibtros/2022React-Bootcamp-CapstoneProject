import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
  
  @media (max-width: 560px) {
    display: grid;
    gap: 2px;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 1%;
    padding-right: 1%;  
  }

  @media (min-width: 561px) and (max-width: 820px) {
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(3, 1fr);
    padding-left: 2%;
    padding-right: 2%;  
  }
`;

export const ProductCard = styled.div`
  background-color: white;
  border-radius: 18px;
  height: 85%;
  width: 96%;
`;

export const ProductDescriptionContainer = styled.div`
  background-color: white;
  border-radius: inherit;
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  margin-bottom: 4px;
  padding-left: 3%;
  text-align: left;
`;

export const ProductName = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  font-weight: bolder;
  width: 60%;

  @media (max-width: 560px) {
    font-size: 12px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    font-size: 16px;
  }
`;

export const ProductPrice = styled.p`
  background-color: #d4b595;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  height: 2.5vh;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-top: 4px;
  width: auto;

  @media (max-width: 560px) {
    font-size: 12px;
    width: 40%;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    font-size: 16px;
    width: 30%;
  }
`;

export const ProductImage = styled.img`
  border-radius: 18px;
  height: 60%;
  margin-bottom: 15px;
  width: 100%;
  
  @media (max-width: 560px) {
    height: 180px;
    width: 100%;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 240px;
    width: 100%;
  }
`;

export const ProductCategory = styled.p`
  background-color: #d4b595;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  height: 2.5vh;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-top: 4px;
  width: 30%;

  @media (max-width: 560px) {
    font-size: 12px;
    width: 40%;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    font-size: 16px;
    width: 30%;
  }
`;