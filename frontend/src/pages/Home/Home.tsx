import { Body, Wrapper, Header, SideMenu, Container, Footer } from '../../components/layout/index';
import Styled from 'styled-components';

function Home() {
  return (
    <Body>
      <Header />
      <Wrapper>
        <SideMenu />
        <Container />
      </Wrapper>
      <Footer />
    </Body>
  );
}
export default Home

// export const Wrapper = Styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: row;
// `