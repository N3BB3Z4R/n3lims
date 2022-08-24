// make a react dropdown component with styled components
import React from 'react';
import styled from 'styled-components';

const Dropdown = ({ children, ...props }: any) => {
  return (
    <DropdownStyled {...props}>
      {children}
    </DropdownStyled>
  );
}
export default Dropdown;

const DropdownStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 8rem;
  height: 100%;
  background-color: #333;
  color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 5px #000;
  position: absolute;
  top:2.8rem;
  left: 0;
  z-index: 1;
  
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    box-shadow: 0px 0px 10px #000;
  }
  .dropdown__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .dropdown__header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      .dropdown__header__title {
        font-size: 20px;
        margin-right: 10px;
      }
      .dropdown__header__icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #ccc;
        margin-right: 10px;
      }
    }
    .dropdown__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      .dropdown__body__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        .dropdown__body__item__icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #ccc;
          margin-right: 10px;
        }
        .dropdown__body__item__title {
          font-size: 20px;
        }
      }
    }
  }
`;