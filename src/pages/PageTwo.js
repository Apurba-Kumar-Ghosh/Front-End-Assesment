import React from "react";
import { SidebarContainer } from "../containers/SidebarContainer";
import { HeaderContainer } from "../containers/HeaderContainer";
import { TableContainerTwo } from "../containers/TablePageTwo";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export function PageTwo({ children, ...restProps }) {
  return (
    <Container>
      <SidebarContainer />
      <MainContainer>
        <HeaderContainer />
        <TableContainerTwo />
      </MainContainer>
    </Container>
  );
}
