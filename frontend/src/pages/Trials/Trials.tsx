import { Body, Wrapper, Header, SideMenu, Container, Footer } from '../../components/layout/index';
import Styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
          <TopMenu>
            <h2>Esto es Trials</h2>
            <input className="top-menu__search" placeholder="Search..." />
            <ul>
              <li>
                <Link className="top-menu__button" to="/">Create</Link>
              </li>
              <li>
                <Link className="top-menu__button" to="/trials">Filter</Link>
              </li>
              <li>
                <Link className="top-menu__button" to="/about">About</Link>
              </li>
            </ul>
          </TopMenu>
          <TrialsList>
            {trials &&
              trials.map((trial: any) => (
                <TrialCard className="card" key={trial.id}>
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

const TopMenu = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
  background-color: #666;
  gap: 1rem;

  ul {
    display: flex;
    gap: 1rem;
    list-style: none;

    .top-menu__button {
      text-decoration: none;
      background-color: green;
      color: white;
      padding: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: hsl(100, 60%, 50%);
      }
    }
  }
  .top-menu__search {
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`

const TrialsList = Styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  border-radius: 1rem;
  background-color: #aaa;
`
const TrialCard = Styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  border-radius: 5px;
  border: 1px solid #bbb;
  background-color: #eee;

  .trial__title {
    flex-shrink: 1;
    margin: 0;
    font-weight: bold;
  }
  .trial__description {
    flex-grow: 1;
    font-size: 0.8rem;
  }
  .trial__button {
    font-size: 1rem;
    justify-self: flex-end;
    align-self: flex-end;
    width: 4rem;
    background-color: hsl(120, 50%, 40%);
    cursor: pointer;
    border: 0;
    padding: 0.4rem;
    color: #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: hsl(120, 50%, 45%);
      border-radius: inherit;
      transition: all 0.2s ease-in-out;
  }
`