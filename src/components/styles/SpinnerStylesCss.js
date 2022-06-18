import { keyframes } from 'styled-components';
import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  margin-left: 36%;
  margin-top: 5%;
  width: 50px;
`;

export const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.img`
  animation: ${rotate} 1s infinite;
`;
