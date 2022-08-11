import { Body, Wrapper, Header, SideMenu, Container, Footer } from '../../components/layout/index';
import Styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../api/ApiServices';
import { HiViewGrid, HiViewList } from 'react-icons/hi';
import { MdCreateNewFolder } from 'react-icons/md';
import { AiFillFilter } from 'react-icons/ai';
import Dropdown from '../../components/atoms/Dropdown';

type ProjectsProps = {
  id: number;
  title: string;
  description: string;
  ownedId: number;
  createdAt: string;
  endedAt: string;
}
function Projects() {

  const [cardStyle, setCardStyle] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<Array<ProjectsProps>>([]);
  const [projects, setProjects] = useState<Array<ProjectsProps>>([]);
  useEffect(() => {
    const getProjectsAsync = async () => {
      const projects = await API.getProjects();
      setProjects(projects);
      setFilteredProjects(projects);
    }
    getProjectsAsync();
  }, [])

  useEffect(() => {
    if (searchFilter === '') {
      setFilteredProjects(projects);
    } else {
      const filteredProjects = projects.filter(project => project.title.toLowerCase().includes(searchFilter.toLowerCase()));
      setFilteredProjects(filteredProjects);
    }
  }, [searchFilter])

  const handleSearchByText = (event: any) => {
    setSearchFilter(event.target.value);
  }

  const handleDropdown = (e: any) => {
    setShowFilterDropdown(!showFilterDropdown);
  }

  return (
    <Body>
      <Header />
      <Wrapper>
        <SideMenu />
        <Container>
          <TopMenu className='topmenu'>
            <h2>Esto es Projects</h2>
            <input onChange={handleSearchByText} className="top-menu__search" placeholder="Search..." />
            <ul>
              <li>
                <Link className="top-menu__button" to="/projects/create"><MdCreateNewFolder /></Link>
              </li>
              <li style={{ position: 'relative' }}>
                <Link className="top-menu__button" to="/projects" onClick={handleDropdown}><AiFillFilter /></Link>
                {showFilterDropdown &&
                  <Dropdown>
                    <a href="#">
                      Order By Date
                    </a>
                    <a href="#">
                      Order By Owner
                    </a>
                  </Dropdown>
                }
              </li>
              <li>
                <Link onClick={() => setCardStyle(!cardStyle)} to="#" className="top-menu__button">
                  <HiViewGrid />/<HiViewList />
                </Link>
              </li>
            </ul>
          </TopMenu>
          <ProjectsList>
            <div className={cardStyle === true ? 'card-list' : 'list-list'}>
              {projects &&
                filteredProjects.map((project: any) => (
                  <ProjectItem className="item" key={project.workflowId}>
                    <p className='project__title'>{project.title}</p>
                    <p className='project__description'>{project.description}</p>
                    <p className='project__owner'>{project.ownedId}</p>
                    <p className='project__date'>{project.startDate}</p>
                    {project.endedAt && <p className='project__date'>{project.endDate}</p>}
                    <p className='project__type'>{project.projectType}</p>
                    <button className='project__button'>Editar</button>
                  </ProjectItem>
                ))}
            </div>
          </ProjectsList>
        </Container>
      </Wrapper>
      <Footer />
    </Body>
  );
}
export default Projects

const TopMenu = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
  background-color: #666;
  gap: 1rem;

  ul {
    display: flex;
    gap: 1rem;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .top-menu__button {
      text-decoration: none;
      background-color: green;
      color: white;
      padding: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: hsl(100, 60%, 50%);
      }
    }
  }
  .top-menu__search {
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`

const ProjectsList = Styled.div`
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 1rem;
  background-color: #aaa;

  .card-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    grid-auto-rows: minmax(100px, auto);

    .item {
      display: flex;
      width: 84%;
      padding: 1.5rem;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
  .list-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    grid: 1rem;
    grid-gap: 1rem;

    .item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 98.2%;
      gap: 1rem;
    }
  }
`
const ProjectItem = Styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  border-radius: 5px;
  border: 1px solid #bbb;
  background-color: #eee;

  .project__title {
    flex-shrink: 1;
    margin: 0;
    font-weight: bold;
  }
  .project__description {
    flex-grow: 1;
    font-size: 0.8rem;
  }
  .project__button {
    font-size: 1rem;
    justify-self: flex-end;
    align-self: center;
    width: 4rem;
    background-color: hsl(120, 50%, 40%);
    cursor: pointer;
    border: 0;
    padding: 0.4rem;
    color: #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: hsl(120, 50%, 45%);
      border-radius: inherit;
      transition: all 0.2s ease-in-out;
    }
  }
`

const ProjectLister = Styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  border-radius: 5px;
`