import { Body, Wrapper, Header, SideMenu, Container, Footer } from '../../components/layout/index';
import Styled from 'styled-components';
import { useEffect, useState } from 'react';
import API from '../../api/ApiServices';
import ListSamples from '../../components/molecules/ListSamples';


type ProjectsProps = {
  workflowId: number;
  title: string;
  description: string;
  ownedId: number;
  createdAt: string;
  endedAt: string;
  projectType: string;
}

function SampleUnit() {

  const [samples, setSamples] = useState<any>([]);

  useEffect(() => {
    const getAllSamples = async () => {
      const samples = await API.getSamples();
      setSamples(samples);
    }
    console.log('samples', samples);
    getAllSamples();
  }, [])

  return (
    <Body>
      <Header />
      <Wrapper>
        <SideMenu />
        <ListSamples
          parent='sample-unit'
          samples={samples}
        />
      </Wrapper>
      <Footer />
    </Body>
  );
}
export default SampleUnit