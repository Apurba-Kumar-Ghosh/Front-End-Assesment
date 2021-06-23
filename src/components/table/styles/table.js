import styled from "styled-components";


export const Container = styled.div`
width : 65vw;
margin : 0 auto;
display : flex;
flex-direction : column;
`;
export const Accordion = styled.div`
width : 100%;
height : 100%;`;
export const AccordionItems = styled.div`
display : flex;
flex-direction : column;
align-items : center;
border-right : 1px solid black;
&:last-of-type {
  border-right : 0;
}`;
export const Row = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: ${({ isOpen }) => (isOpen === true ? "285px" : "60px")};
  &:nth-of-type(2) {
    background: #f2f2f2;
  }
  &:nth-of-type(1) {
    margin-top: 40px;
  }
  border-bottom: ${({ accordion }) =>
    accordion === true ? "0" : "2px solid black"};
`;
export const Column = styled.div`
flex-basis : 25%;
text-align : center;
`;
export const Button = styled.button`
  width: 160px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 20px;
  background: ${({ isDenied }) =>
    isDenied === true ? "rgba(255, 8, 8, 0.3)" : "rgba(39, 174, 96, 0.3)"};
  color: ${({ isDenied }) => (isDenied === true ? "#FF0808" : "#27AE60")};
  border: ${({ isDenied }) =>
    isDenied === true ? "1px solid #FF0808" : "1px solid #27AE60"};
    cursor : pointer;
    font-weight : 700;
`;
export const Text = styled.p``;
export const HeaderFrame = styled.div`
  display: flex;
  padding: 0;
  align-items : center;
`;
export const GroupItem = styled.p`
  flex-basis: 20%;
  border-right : 1px solid black;
  font-size : 14px;
  padding : 0;
  &:last-of-type{
      border-right : 0;
  }
`;
export const HeaderSection = styled.div`
  display: flex;
  height : 50px;
  align-items: baseline;
  padding: 0 20px;
  text-align: center;
  border-bottom: ${({ isActive }) =>
    isActive === true ? "5px solid #673ab7" : "none"};
  color: ${({ isActive }) => (isActive === true ? "#673AB7" : "black")};
  font-weight: ${({ isActive }) => (isActive === true ? "700" : "400")};
`;
export const HeaderText = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: -90px;
  height: 80px;
  color: #673ab7;
  font-weight : 700;
`;

export const Section = styled.div`
width :100%;
display : flex;
flex-direction : column;`;
export const IconHolder = styled.div`
position : absolute;
left : 5px;`;
export const Group = styled.div`
position :relative;
display : flex;
height : 60px;
justify-content : center;
align-items : center;
`;
export const Sec = styled.div`
display : flex;
justify-content : space-evenly;
align-items : baseline;`;
export const Frame = styled.div`
width : 50%;
height : 100%;
display : flex;
justify-content : space-around;
align-items : center;`;
export const FrameButton = styled.button`
  width: 190px;
  height: 40px;
  background: #673ab7;
  display :flex;
  align-items : center;
  color : white;
  font-size : 16px;

  span{
      &:nth-of-type(1){
          margin-right : 20px;
      }
  }
`;