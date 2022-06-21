import {
  SearchBox,
  SearchForm,
  SearchIcon,
  SearchInput,
} from './styles/SearchStylesCss';

import searchIcon from '../search-svgrepo-com.svg';

export const Search = () => {
  return (
    <SearchForm>
      <SearchBox>
        <SearchInput type='text'/>
        <SearchIcon type='submit' src={searchIcon} alt='searchIcon' />
      </SearchBox>
    </SearchForm>
  )
}
