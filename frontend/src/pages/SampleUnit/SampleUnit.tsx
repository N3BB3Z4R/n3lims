import { Body, Wrapper, Header, SideMenu, Container, Footer } from '../../components/layout/index';
import Styled from 'styled-components';
import { useEffect, useState } from 'react';
import API from '../../api/ApiServices';
import ListManager from '../../components/molecules/ListManager';

type ProjectsProps = {
  workflowId: number;
  title: string;
  description: string;
  ownedId: number;
  createdAt: string;
  endedAt: string;
  projectType: string;
}
function Home() {
  const [projects, setProjects] = useState<Array<ProjectsProps>>([]);

  useEffect(() => {
    const getProjectsAsync = async () => {
      const projects = await API.getProjects();
      setProjects(projects);
    }
    getProjectsAsync();
  }, [])



  return (
    <Body>
      <Header />
      <Wrapper>
        <SideMenu />
        <ListManager
          parent='sample-unit'
          projects={projects}
        />
      </Wrapper>
      <Footer />
    </Body>
  );
}
export default Home