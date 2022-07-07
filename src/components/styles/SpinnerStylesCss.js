import { keyframes } from 'styled-components';
import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: flex;
  height: 55px;
  justify-content: space-around;
  margin-left: 48%;
  padding-top: 1%;
  padding-bottom: 1%;
  width: 55px;
  position: relative;
`;

export const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.img`
  animation: ${rotate} 1s infinite;
`;
