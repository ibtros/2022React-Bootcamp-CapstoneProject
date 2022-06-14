import { keyframes } from 'styled-components';
import loadingIcon from '../loading-svgrepo-com.svg';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  margin-left: 36%;
  margin-top: 5%;
  width: 50px;
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.img`
  animation: ${rotate} 1s infinite;
`;

export function Spinner() {
  return (
    <SpinnerContainer>
      <LoadingSpinner src={loadingIcon}/>
    </SpinnerContainer>
  )
}
