import { Body, Wrapper, Header, SideMenu, Container, Footer } from '../../components/layout/index';
import Styled from 'styled-components';

function Home() {
  return (
    <Body>
      <Header />
      <Wrapper>
        <SideMenu />
        <Welcome>
          Bienvenido a N3LIMS, la aplicacion para gestion de sample units, estudios y ensayos clinicos.
        </Welcome>
        {/* <Container /> */}
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
const Welcome = Styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
`