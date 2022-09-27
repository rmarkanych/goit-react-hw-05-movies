import styled from 'styled-components';
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    62deg,
    #fbab7e 0%,
    #f7ce68 50%,
    #ffffff 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MainWrapper = styled.div`
  background-color: #fbab7e;
  background-image: linear-gradient(
    62deg,
    #fbab7e 0%,
    #f7ce68 50%,
    #ffffff 100%
  ); ;
`;
