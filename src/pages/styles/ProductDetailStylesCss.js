import styled from 'styled-components';

export const ProductContainer = styled.div`
  padding: 4%;
`;

export const ProductDetailContainer = styled.div`
  background-color: #fdfdfd;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-bewteen;
`;

export const CarouselContainer = styled.div`
  height: 500px;
  padding-left: 20px;
  width: 400px;
`;

export const CarouselImage = styled.img`
  height: 500px;
  width: 400px;
`;

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4%;
  margin-left: 6%;
  margin-top: 4%;
  padding-left: 3%;
  width: 54%;
`;

export const ProductName = styled.label`
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: bold;
  text-align: left;
`;

export const ProductDesciption = styled.p`
  color: gray;
  font-size: 16px;
  text-align: left;
  width: 95%;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10%;
`;

export const ProductField = styled.label`
  color: gray;
  font-size: 18px;
  text-align: left;
`;

export const ProductData = styled.label`
  color: #6a6a6a;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

export const Spec = styled.li`
  color: #6a6a6a;
  font-size: 16px;
  list-style-type: none;
  text-align: left;
`;

export const TagsContainer = styled.div`
  background-color: #eaeaea;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  height: 60px;
  margin-top: 10px;
  margin-right: 8%;
  align-items: center;
`;

export const AddQuantity = styled.input`
  width: 50px;
  height: 50px;
  margin-top: 20px;
`;

export const AddButton = styled.button`
  margin-top: 20px;
  background-color: #c9c9c9;
  width: 150px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 15px;
  border: none;
  height: 50px;
`;
