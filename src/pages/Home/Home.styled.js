import styled from 'styled-components';

export const HomeTitle = styled.h1`
  text-align: center;
  font-family: 'Caveat Brush';
  font-size: 40px;
`;

export const HomeList = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin: 0;

  padding-bottom: 20px;
`;

export const HomeItem = styled.li`
  list-style: none;
`;

export const HomeImage = styled.img`
  box-shadow: 3px 3px 9px black;
  width: 250px;
  height: 400px;
  border-radius: 50px;
`;
export const HomeParagrapher = styled.p`
  text-align: center;
  color: gray;
  font-family: 'Caveat Brush';
  font-size: 20px;
`;
export const HomeRate = styled.p`
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
