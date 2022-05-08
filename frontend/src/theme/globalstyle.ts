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
`

export default GlobalStyle
