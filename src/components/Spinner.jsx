import { LoadingSpinner, SpinnerContainer } from './styles/SpinnerStylesCss';

import loadingIcon from '../loading-svgrepo-com.svg';

export function Spinner() {
  return (
    <SpinnerContainer>
      <LoadingSpinner src={loadingIcon}/>
    </SpinnerContainer>
  )
}
