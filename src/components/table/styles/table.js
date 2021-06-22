import styled from "styled-components";

export const Container = styled.div`
width : 65vw;
margin : 0 auto;
display : flex;
flex-direction : column;
`;
export const Row = styled.div`
min-width : 100%;
height : 60px;
display : flex;
justify-content : space-between;
align-items : baseline;
border-bottom : 2px solid black;

&:nth-of-type(1){
    background : #f2f2f2;
}
`;
export const Column = styled.div`
flex-basis : 25%;
`;
export const Button = styled.button``;
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