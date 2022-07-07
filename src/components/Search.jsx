import {
  SearchBox,
  SearchForm,
  SearchIcon,
  SearchInput,
} from './styles/SearchStylesCss';

import searchIcon from '../search-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchBox>
        <SearchInput 
          type='text'           
          value={searchTerm ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            setSearchTerm(value);
          }}
        />
        <SearchIcon type='submit' src={searchIcon} alt='searchIcon' />
      </SearchBox>
    </SearchForm>
  )
}
