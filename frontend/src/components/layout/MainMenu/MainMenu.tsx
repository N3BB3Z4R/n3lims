import { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { Button } from '../../atoms/button';

type MainMenuDataProps = {
  id: number;
  text: string;
  link: string;
  icon: string;
  active: boolean;
}

const MainMenu_Data: Array<MainMenuDataProps> = [
  {
    id: 1,
    text: 'Dashboard',
    link: '/',
    icon: 'home',
    active: false,
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

interface MainMenuProps {
  section: string;
  setSection: (section: string) => void;
}

const MainMenu = (Props: MainMenuProps) => {
  const { section, setSection } = Props;
  const [menuData] = useState(MainMenu_Data);
  const [activeMenu, setActiveMenu] = useState<string>(section);

  useEffect(() => {
    setActiveMenu(section);
  }, [section])

  return (
    <MainMenuStyled className="main-menu">
      <div className="side-menu__body">
        <ul>
          {menuData.map((item, index) => {
            return (
              <li key={index}>
                <Link className={activeMenu === item.text ? "button-side button-side--selected" : "button-side"} to={item.link} onClick={() => setSection(item.text)}>
                  {item.text}
                  <span className="badge">{item.text.slice(0, 1)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </MainMenuStyled >
  );
}
export default MainMenu;

// width: ${ (props) => props.active ? '10rem' : '3.5rem' };
const MainMenuStyled = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ul {
    list-style: none;
    padding: 0rem;
    min-width: 5rem;
    display: flex;
    gap: 0.2rem;
    align-items: flex-end;
  }

  .side-menu__body {
    display: flex;
    flex-direction: row;
    padding: 0rem;
  }

  .button-side {
    display: block;
    padding: 0.8rem 1.5rem;
    text-align: start;
    text-decoration: none;
    color: #ffffff44;
    min-width: 7rem;
    background: hsl(100, 80%, 40%);
    border-radius:0.5rem 0.5rem 0 0;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    position: relative;

    &:hover {
      color: #ffffff;
    }

    .badge {
      position: absolute;
      left: 1.5rem;
      opacity: 1;
      color: #fff;
      transition: all 0.3s ease-in-out;
      font-weight: bold;
    }
    
    &:hover {
      background: hsl(120, 76%, 20%);
      transform: scale(1.1);
      box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.5);
      width: 4rem;
      z-index: 10;

      .badge {
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
    }
  }
  .button-side--selected {
    background: hsl(150.8411214953271, 63.31360946745561%, 33.13725490196078%);
    color: #ffffffff;

    .button-side {
      color: #ffffff;
    }

    .badge {
      color: yellow;
    }
  }
`