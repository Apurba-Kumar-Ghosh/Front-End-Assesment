import styled from "styled-components";


export const Container = styled.div`
width : 65vw;
margin : 0 auto;
display : flex;
flex-direction : column;
`;
export const Row = styled.div`
  min-width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 2px solid black;

  &:nth-of-type(2) {
    background: #f2f2f2;
  }
  &:nth-of-type(1) {
    margin-top : 40px;
  }
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
export const Group = styled.div`
display : flex;
justify-content : center;

    div{
        border-right : 1px solid black;
    }
`;
export const GroupItem = styled.p`
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