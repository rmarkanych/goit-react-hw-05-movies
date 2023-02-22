import styled from 'styled-components';

export const ReviewList = styled.ul`
  margin-top: 0;
  padding: 0 20px;
`;

export const ErrorTitle = styled.p`
  font-family: 'Caveat Brush';
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
    @media screen and (min-width: 768px) {
  font-size: 30px;
  }
`;

export const ReviewItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;

export const AuthorName = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  font-family: 'Caveat Brush';
    @media screen and (min-width: 768px) {
  font-size: 30px;
  }
`;

export const ReviewContent = styled.p`
  margin: 0;
  font-family: 'Caveat Brush';
    @media screen and (min-width: 768px) {
  font-size: 30px;
  }
`;

export const ReviewTextWrapper = styled.span`
  color: gray;
`;
