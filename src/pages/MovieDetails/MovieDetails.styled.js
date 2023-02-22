import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const BtnBack = styled(Link)`
  display: flex;
  max-width: 40px;
  max-height: 40px;
  padding: 10px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 40px;
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
  }
`;

export const MainWrap = styled.div`
  background-color: black;
  max-width: 625px;
  margin: 0 auto;
  border-radius: 50px;
  max-height: 600px;
  box-shadow: 3px 3px 9px black;
  @media screen and (min-width: 768px) {
  max-width: 1125px;
  max-height: 735px;
  }
`;

export const Image = styled.img`
  max-width: 200px;
  max-height: 600px;
  margin: 0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  @media screen and (min-width: 768px) {
  max-width: 400px;
    max-height: 725px;
  }
`;

export const MovieWrapper = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-family: 'Caveat Brush';
    font-size: 18px;
  color: orange;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
     font-size: 30px;
  }
`;

export const ScoreParagrapher = styled.p`
  font-family: 'Caveat Brush';
  color: orange;
  margin: 0;
  color: #fbab7e;
  margin-top: 5px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
  font-size: 30px;
  }
`;

export const OverviewTitle = styled.h2`
  font-family: 'Caveat Brush';
  color: orange;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
  font-size: 30px;
  }
`;

export const GenresTitle = styled.h2`
  font-family: 'Caveat Brush';
  color: orange;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
  font-size: 30px;
  }
`;
export const OverviewParagrapher = styled.p`
  font-family: 'Caveat Brush';
  max-width: 700px;
  color: orange;
  margin: 0;
  color: #fbab7e;
  margin-top: 5px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
  font-size: 30px;
  }
`;

export const GenresParagrapher = styled.p`
  font-family: 'Caveat Brush';
  color: orange;
  margin: 0;
  color: #fbab7e;
  margin-top: 5px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
  font-size: 30px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const NavBtn = styled(NavLink)`
  padding: 5px 15px;
  margin-bottom: 20px;
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
  @media screen and (min-width: 768px) {
  font-size: 30px;
  }
`;

export const InfoTitle = styled.h2`
  font-family: 'Caveat Brush';
  display: block;
  text-align: center;
  @media screen and (min-width: 768px) {
  font-size: 30px;
  }
`;
