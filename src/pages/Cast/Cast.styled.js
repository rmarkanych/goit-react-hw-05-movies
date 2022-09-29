import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 0;
`;
export const CastItem = styled.li`
  list-style: none;
`;
export const CastImage = styled.img`
  box-shadow: 3px 3px 9px black;
  width: 250px;
  height: 400px;
  border-radius: 50px;
`;
export const CastParagrapher = styled.p`
  width: 250px;
  text-align: center;
  color: gray;
  font-family: 'Caveat Brush';
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 5px;
`;
export const SpanWrap = styled.span`
  color: black;
`;
