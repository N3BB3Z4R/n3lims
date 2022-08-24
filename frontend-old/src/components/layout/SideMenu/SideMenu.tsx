import { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { Button } from '../../atoms/button';

type SideMenuProps = {
  id: number;
  text: string;
  link: string;
  icon: string;
  active: boolean;
}

const SideMenu_Data: Array<SideMenuProps> = [
  {
    id: 1,
    text: 'Dashboard',
    link: '/',
    icon: 'home',
    active: true,
  },
  {
    id: 2,
    text: 'Projects',
    link: '/projects',
    icon: 'info',
    active: false,
  },
  {
    id: 3,
    text: 'Sample Unit',
    link: '/sample-unit',
    icon: 'phone',
    active: false,
  }
]

const SideMenu = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState(SideMenu_Data);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    console.log(activeLink);
  }, [activeLink])


  const handleClick = (link: string) => {
    setActiveLink(link);
    // setActive(!active);
  }

  const handleActive = (link: string) => {
    if (link === activeLink) {
      return true;
    }
    return false;
    console.log(link)
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
                  <Link className={activeLink === item.text ? "button-side button-side--selected" : "button-side"} to={item.link} onClick={() => handleClick(item.text)}>
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
    color: #ffffff00;
    min-width: 7rem;
    background: hsl(100, 80%, 40%);
    border-radius:0 0.5rem 0.5rem 0;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem 0;
    transform: translateX(-75%);
    position: relative;
    cursor: pointer;
    &:hover {
      color: #ffffff;
    }

    .badge {
      opacity: 1;
      color: #fff;
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
  .button-side--selected {
    background: hsl(150.8411214953271, 63.31360946745561%, 33.13725490196078%);
    color: #ffffff00;

    .badge {
      color: yellow;
    }
  }
`