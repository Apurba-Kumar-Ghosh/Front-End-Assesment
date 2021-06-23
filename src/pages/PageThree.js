import React from "react";
import { SidebarContainer } from "../containers/SidebarContainer";
import { HeaderContainer } from "../containers/HeaderContainer";
import { TableContainerThree } from "../containers/TableContainerThree";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export function PageThree({ children, ...restProps }) {
  return (
    <Container>
      <SidebarContainer />
      <MainContainer>
        <HeaderContainer />
        <TableContainerThree />
      </MainContainer>
    </Container>
  );
}
