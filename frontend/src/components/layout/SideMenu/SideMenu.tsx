import { useState } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { Button } from '../../atoms/button';

const SideMenu_Data = [
  {
    text: 'Home',
    link: '/',
    icon: 'home',
    active: true,
  },
  {
    text: 'Trials',
    link: '/trials',
    icon: 'info',
    active: false,
  },
  {
    text: 'Contact',
    link: '/contact',
    icon: 'phone',
    active: false,
  }
]

const SideMenu = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState(SideMenu_Data);
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link: string) => {
    setActiveLink(link);
    // setActive(!active);
  }

  const handleActive = (link: string) => {
    if (link === activeLink) {
      return true;
    }
    return false;
  }

  const handleHide = () => {
    setActive(!active);
  }

  return (
    <SideMenuStyled>
      <div className="side-menu">
        <div className="side-menu__body">
          <ul>
            {data.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="button-side" to={item.link} onClick={() => handleClick(item.link)}>
                    {item.text}
                    <span className="badge">{item.text.slice(0, 1)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SideMenuStyled >
  );
}
export default SideMenu;

interface SideMenuProps {
  active: boolean;
}

// width: ${ (props) => props.active ? '10rem' : '3.5rem' };
const SideMenuStyled = Styled.div`
  width: 1rem;
  background: #666;
  position: relative;

  ul {
    list-style: none;
    padding: 0rem;
    min-width: 5rem;
    position: absolute;
    left: 0;
  }

  .side-menu__body {
    display: flex;
    flex-direction: column;
    padding: 0rem;
  }

  .button-side {
    display: block;
    padding: 0.8rem 1rem;
    text-align: center;
    text-decoration: none;
    color: #fff;
    min-width: 7rem;
    background: hsl(100, 80%, 40%);
    border-radius:0 0.5rem 0.5rem 0;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem 0;
    transform: translateX(-75%);
    position: relative;
    cursor: pointer;

    .badge {
      opacity: 1;
      transition: all 0.3s ease-in-out;
      position: absolute;
      right: 0.9rem;
      padding-left: 0.5rem;
      font-weight: bold;
    }
    
    &:hover {
      background: hsl(120, 76%, 20%);
      transform: translateX(-0.5rem);
      box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.5);
      width: 4rem;

      .badge {
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`