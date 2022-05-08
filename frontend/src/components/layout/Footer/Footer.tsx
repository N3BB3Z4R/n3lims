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
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
`