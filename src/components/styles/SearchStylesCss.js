import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const SearchBox = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  border-radius: 10px;
  border: 1px solid white;
  font-size: 1.2rem;
  height: 30px;
  padding: 5px 30px 5px 10px;
  &:focus {
    outline: none;
    border: 1px solid #F88EC2;
    box-shadow: 0 0 5px #EBBED4;
  }
`;

export const SearchIcon = styled.img`
  background: none;
  border: none;
  cursor: pointer;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  &:focus {
    outline: none;
    border: 1px solid #F88EC2;
    box-shadow: 0 0 5px #EBBED4;
  }
`;