import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const logo = 'https://randomuser.me/api/portraits/men/21.jpg'
function Header() {
  return (
    <HeaderStyled>
      {/* <img src={logo} alt="Logo" /> */}
      <div className="header__wrapper">
        <h1>N3LIMS - Neat, Nimble & Nifty</h1>
        <Link to="/login" className="button-2">Login / Register</Link>
      </div>
    </HeaderStyled>
  );
}
export default Header

const HeaderStyled = Styled.div`
  width: 100%;
  max-width: 100%;
  background-color: #333;
  color: white;

  .header__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
`