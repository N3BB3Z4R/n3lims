import React from 'react';
import Styled from 'styled-components';
// import { Container } from '../../../theme'

function Footer() {
  return (
    <FooterStyled>
      <div>
        <span>This is the footer 2022</span>
      </div>
    </FooterStyled>
  )
}
export default Footer

const FooterStyled = Styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  flex-grow: 2;
  background: #333;
  color: white;
`