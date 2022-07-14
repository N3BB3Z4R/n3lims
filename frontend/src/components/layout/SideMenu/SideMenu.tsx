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
        <div className="side-menu-header">
          <div className="side-menu-header-title">
            <h1>ReactJS</h1>
          </div>
          <button onClick={handleHide}>Toggle</button>
        </div>
        <div className="side-menu-body">
          <ul>
            {data.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.link} onClick={() => handleClick(item.link)}>
                    {item.text}
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
  width: 10rem;
  background: #ffa;
  overflow: hidden;

  .opened {
    width: 10rem;
    background: red;
  }

  ul {
    list-style: none;
    padding: 0rem;
  }
`