import React from 'react';
import Styled from 'styled-components';

const logo = 'https://randomuser.me/api/portraits/men/21.jpg'
function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="Logo" />
      <h1>N3LIMS - Neat, Nimble & Nifty</h1>
      <button>Login</button>
    </HeaderStyled>
  );
}
export default Header

const HeaderStyled = Styled.div`
  width: 100%;
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`