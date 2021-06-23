import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width : 75vw;
  height : 157px;
  border-bottom : 1px solid black;
`;
export const Section = styled.div`
  display: flex;
  align-items: baseline;
  padding : 0 20px;
  text-align :center;
  border-bottom: ${({ isActive }) =>
    isActive === true ? "5px solid #673ab7" : "none"};
  color: ${({ isActive }) => (isActive === true ? "#673AB7" : "black")};
  font-weight: ${({ isActive }) => (isActive === true ? "700" : "400")};
`;

export const Group = styled.div`
min-height : 100%;
  display: flex;
  flex-direction : column;
  justify-content : space-between;
`;
export const Frame = styled.div`
min-height : 100%;
  display: flex;
  align-items : flex-end;
  padding : 0;
`;
export const Text = styled.p`
  font-size: 18px;
`;

export const ItemIcon = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const Item = styled.div`
width : 100%;
height : 100%;
display : flex;
align-items : baseline;
`;

export const SubText = styled.div`
font-size : 14px;
font-weight : 200;`;