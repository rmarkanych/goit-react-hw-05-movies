import styled from 'styled-components';

export const MoviesForm = styled.form`
  display: flex;
  align-items: center;
  width: 250px;
  background-color: black;
  border-radius: 3px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 20px;
  @media screen and (min-width: 460px) {
   width: 400px;
  }
`;

export const MoviesInput = styled.input`
  display: inline-block;
  width: 100%;
  background-color: black;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  color: orange;
  &::placeholder {
    font-size: 18px;
  }
  &::selection {
    color: black;
    background: orange;
  }

`;

export const MoviesBtn = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  background: orange;
  background-image: url('https://cdn-icons-png.flaticon.com/128/8443/8443367.png');
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

export const MovieList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 0;
  padding-bottom: 20px;
  margin-top: 20px;
`;

export const MovieItem = styled.li`
  list-style: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;

export const MovieImage = styled.img`
  box-shadow: 3px 3px 9px black;
  width: 250px;
  height: 400px;
  border-radius: 50px;
`;

export const MovieParagrapher = styled.p`
  text-align: center;
  color: gray;
  font-family: 'Caveat Brush';
  font-size: 20px;
  margin-bottom: 7px;
  margin-top: 0;
  width: 250px;
`;

export const MovieRate = styled.p`
  text-align: center;
  color: orange;
  font-family: 'Caveat Brush';
  font-size: 20px;
  border: 1px solid black;
  background-color: black;
  margin: 0 auto;
  width: 50px;
  border-radius: 5px;
`;
