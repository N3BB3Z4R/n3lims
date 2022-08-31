import { Body, Wrapper, Header, MainMenu, Container, Footer } from '../../components/layout/index';
import Styled from 'styled-components';
import { useEffect, useState } from 'react';
import SampleUnit from '../SampleUnit/SampleUnit';
import { MainMenuDataEnum } from '../../types/SamplesType.d';
import Projects from '../Projects/Projects';


function Home(state: any) {
  const [section, setSection] = useState(state);

  useEffect(() => {
    setSection(state);
    console.log('state', state);
  }, [])

  return (
    <Body>
      <Header />
      <MainMenu section={section} setSection={setSection} />
      <Wrapper>
        {section === MainMenuDataEnum.Dashboard &&
          <Welcome>
            Bienvenido a N3LIMS, la aplicacion para gestion de sample units, estudios y ensayos clinicos.
          </Welcome>
        }
        {/* <Container /> */}
        {section === MainMenuDataEnum.Projects && <Projects />}
        {section === MainMenuDataEnum.SampleUnit && <SampleUnit section={section} />}
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