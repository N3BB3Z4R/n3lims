import React from 'react'
import styled from 'styled-components'

const Button = (text: string, link: string) => {
  return <ButtonStyled type="button" onClick={() => window.location.replace(link)}>
    {text}
  </ButtonStyled>
}
export default Button

const ButtonStyled = styled.button`
  background-color: red;
  border: 2px solid #d9d9d9;
  border-radius: 3px;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  text-decoration: none;
`
