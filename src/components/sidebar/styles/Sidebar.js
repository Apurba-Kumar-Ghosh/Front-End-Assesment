import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 25vw;
  margin: 0 10px;
`;
export const Header = styled.div`
display : flex;
align-items : center;
width: 100%;
height : 74px;
`;
export const Heading = styled.img`
width : 100px;
height : 21.31px;
padding : 0 10px;`;

export const Text = styled.p`
line-height : 21px;
font-size : 18px;`;

export const Group = styled.div`
display : flex;
flex-direction : column;
align-items : flex-start;
width : 100%;

  a{
    text-decoration : none;
  }
`;
export const Item = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  height: 58px;
  cursor: pointer;
  box-sizing : border-box;
  background-color: ${({ isActive }) =>
    isActive === true ? "#E1D8F1" : "#ffffff"};
  border-left: ${({ isActive }) =>
    isActive === true ? "7px solid #673ab7" : "none"};
  font-weight: ${({ isActive }) => (isActive === true ? "700" : "400")};

  color : ${({ isActive }) => (isActive === true ? "#673AB7" : "black")};
  border-radius: 3px;
`;
export const ItemIcon = styled.div`
padding-left : 10px;
padding-right : 20px;`;

export const HeaderImage = styled.img`
width : 40px;
height : 40px;
object-fit : contain;
`;