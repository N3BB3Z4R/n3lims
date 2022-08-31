import { Body, Wrapper, Header, MainMenu, Container, Footer } from '../../components/layout/index';
import Styled from 'styled-components';
import { useEffect, useState } from 'react';
import API from '../../api/ApiServices';
import ListSamples from '../../components/molecules/ListSamples';
import { SampleProps } from '../../types/SamplesType';

function SampleUnit(Props: any) {
  const { section } = Props;

  const [samples, setSamples] = useState<SampleProps[]>([]);

  const getAllSamples = async () => {
    const samples = await API.getSamples();
    setSamples(samples);
  }

  useEffect(() => {
    getAllSamples();
    console.log('samples', samples);
  }, [])

  return (
    <Wrapper>
      <ListSamples
        parent='sample-unit'
        samples={samples}
      />
    </Wrapper>
  );
}
export default SampleUnit