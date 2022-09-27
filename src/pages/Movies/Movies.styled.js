import styled from 'styled-components';

export const MoviesForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const MoviesInput = styled.input`
  display: inline-block;
  width: 100%;
  /* font: inherit; */
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    /* font: inherit; */
    font-size: 18px;
  }
`;

export const MoviesBtn = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  background-color: white;
  background-image: url('https://cdn-icons-png.flaticon.com/128/8443/8443367.png');
  margin-right: 10px;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    background-size: 55%;
  }
`;

export const BtnIcon = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
  background-color: transparent;
`;
