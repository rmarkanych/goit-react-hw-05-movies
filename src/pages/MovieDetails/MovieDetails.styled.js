import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Item = styled.li`
  list-style: none;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 40px;
  display: flex;
  justify-content: center;
`;
export const MainWrap = styled.div`
  background-color: black;
  max-width: 1125px;
  margin: 0 auto;
  margin-top: 20px;
  padding-right: 20px;
  border-radius: 50px;
  height: 735px;
  box-shadow: 3px 3px 9px black;
`;
export const Image = styled.img`
  width: 400px;
  border-radius: 50px;
  max-height: 725px;
  align-items: center;
  justify-content: center;
  /* box-shadow: 3px 3px 9px black; */
`;

export const MovieWrapper = styled.div`
  margin-left: 20px;
  /* background-color: black; */
  border-radius: 50px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const Title = styled.h1`
  font-family: 'Caveat Brush';
  font-size: 40px;
  color: orange;
`;
export const ScoreParagrapher = styled.p`
  font-family: 'Caveat Brush';
  font-size: 40px;
  color: orange;
`;

export const OverviewTitle = styled.h2`
  font-family: 'Caveat Brush';
  color: orange;
  font-size: 40px;
`;
export const GenresTitle = styled.h2`
  font-family: 'Caveat Brush';
  font-size: 40px;
  color: orange;
`;
export const OverviewParagrapher = styled.p`
  font-family: 'Caveat Brush';
  width: 700px;
  color: orange;
  font-size: 30px;
`;
export const GenresParapher = styled.p`
  font-family: 'Caveat Brush';
  font-size: 40px;
  color: orange;
`;
// Title,
//   ScoreParagrapher,
//   OverviewTitle,
//   OverviewParagrapher,
//   GenresTitle,
//   GenresParapher,

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px;
`;

export const NavBtn = styled(NavLink)`
  font-size: 30px;
  text-decoration: none;
  background-color: orange;
  border-radius: 7px;
  color: black;
  font-family: 'Caveat Brush';
  &.active {
    color: gray;
  }

  :focus-visible:not(.active),
  :hover:not(.active) {
    color: gray;
    transform: scale(1.05);
  }
`;
