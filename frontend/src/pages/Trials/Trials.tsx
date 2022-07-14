import { Body, Wrapper, Header, SideMenu, Container, Footer } from '../../components/layout/index';
import Styled from 'styled-components';
import { useEffect, useState } from 'react';

function Home() {

  const [trials, setTrials] = useState<
    Array<{
      id: number;
      title: string;
      description: string;
      createdAt: string;
    }>
  >([]);
  useEffect(() => {
    fetch('http://localhost:3001/trials')
      .then(response => response.json())
      .then(data => setTrials(data))
  }, [])

  return (
    <Body>
      <Header />
      <Wrapper>
        <SideMenu />
        <Container>
          <h2>Esto es Trials</h2>
          <TrialsList>
            {trials &&
              trials.map((trial: any) => (
                <TrialCard key={trial.id}>
                  <p className='trial__title'>{trial.title}</p>
                  <p className='trial__description'>{trial.description}</p>
                  <button className='trial__button'>Editar</button>
                </TrialCard>
              ))
            }
          </TrialsList>
        </Container>
      </Wrapper>
      <Footer />
    </Body>
  );
}
export default Home

const TrialsList = Styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  gap: 1rem;
`
const TrialCard = Styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px;
  border: 1px solid #bbb;
  background-color: #eee;

  &:hover {
    background-color: #ccc;
  }

  .trial__description {
    flex-grow: 1;
  }
`