import styled from 'styled-components';

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
  width: 165px;
`;

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 4fr);
  padding-left: 4vh;
  padding-right: 4vh;

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    padding-left: 2vh;
    padding-right: 2vh;  
  }
`;

export const CustomerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const OrderNotesInput = styled.input`
  height: 30%;
`;

export const CheckoutFooter = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-end;
`;

export const Total = styled.p`
  padding-left: 1vh;
`;