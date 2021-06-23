import styled from 'styled-components'

export const Container = styled.section`
height : 100%;
width : 100%;
postion : relative;
`;
export const Group = styled.div`
width : 100%;
display : flex;
justify-content : space-around;`;
export const GroupItem = styled.div`
display : flex;
flex-direction : column;
border-right : 1px solid black;
padding : 0 125px;
&:last-of-type {
    border-right : 0;
}`;
export const InputGroup = styled.div`
display : flex;
align-items : baseline;`;
export const RadioInput = styled.input`
  &:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 10px;
    top: -1px;
    left: 0px;
    position: relative;
    background-color: #673ab7;
    content: "";
    display: inline-block;
    visibility: visible;
  }
`;
export const CheckboxInput = styled.input`
`;
export const Text = styled.p`
font-size : 14px;`;
export const SubText = styled.p`
font-size : 10px;`;
export const SuperText = styled.p`
font-size : 16px;`;
export const HeadText = styled.p`
margin-top : -30px;
margin-left : 30px;`;
export const Header = styled.p``;
export const TextGroup = styled.div``;