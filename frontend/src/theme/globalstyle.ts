import { createGlobalStyle } from 'styled-components'
import { fonts } from './'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: white;
    font-family: ${fonts.fontFamily}
  }

  h1,h2,h3,h4,h5,h6 {
      font-family: ${fonts.fontFamilyHeaders}
  }

  .button-2 {
    display: block;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background: #555;
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    
    &:hover {
      background: #666;
    }
  }
  .card {
    transition: all 0.3s ease-in-out;
  }
  .card:hover {
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.5);
    transform: translateY(-0.2rem);
    transition: all 0.3s ease-in-out;
  }
`

export default GlobalStyle
