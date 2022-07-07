import styled from 'styled-components';

export const ShoppingCartTable = styled.table`
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 25vh;
  height: 25vh;
  margin-right: 5px;
  margin-left: 5px;
`;

export const RemoveIcon = styled.img`
  width: 4vh;
  height: 4vh;
`;

export const HiddenButton = styled.button`
  display: none;
`;

export const ProductQuantityInput = styled.input`
  width: 6vh;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #d4b595;
  border-color: #c9c9c9;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  height: 35px;
  margin-bottom: 20px;
  margin-top: 15px;
  width: 165px;
`;

export const Total = styled.td`
  text-align: right;
  padding-right: 32px;
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;