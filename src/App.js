import React from 'react'
import { SidebarContainer } from './containers/SidebarContainer'
import { HeaderContainer } from './containers/HeaderContainer'
import { TableContainer } from './containers/TableContainer';
import styled from 'styled-components';

const Container = styled.section`
display : flex;`;
const MainContainer = styled.div`
display : flex;
flex-direction : column;
`;
function App() {
  return (
    <Container>
      <SidebarContainer />
       <MainContainer>
        <HeaderContainer />
        <TableContainer />
        </MainContainer>
    </Container>
  );
}

export default App;
