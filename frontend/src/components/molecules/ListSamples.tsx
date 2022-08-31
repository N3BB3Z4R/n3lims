import { useEffect, useState } from 'react';
import { Body, Wrapper, Header, SideMenu, Container, Footer } from '../layout/index';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiViewGrid, HiViewList } from 'react-icons/hi';
import { MdCreateNewFolder } from 'react-icons/md';
import { AiFillFilter } from 'react-icons/ai';
import Dropdown from '../atoms/Dropdown';

type SampleProps = {
  SampleID: number;
  Type: string;
  Temperature: number;
  FreezerID: number;
  OnLoan: boolean;
  QRCode: string;
  BoxID: number;
  ShelvingID: number;
  Description: string;
  ParticipantID: number;
  TakingDate: string;
  BoxSlotID: number;
  Amount: number;
  ProjectID: number;
}

type ListManagerProps = {
  parent: string;
  samples: Array<SampleProps>;
}

const ListSamples = ({
  parent,
  samples,
}: ListManagerProps) => {
  const [cardStyle, setCardStyle] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [fieldFilter, setFieldFilter] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [filteredSamples, setFilteredSamples] = useState<Array<SampleProps>>();

  useEffect(() => {
    setFilteredSamples(samples);
  }, [])

  useEffect(() => {
    if (searchFilter === '') {
      setFilteredSamples(samples);
    } else {
      const filteredSamples = samples.filter(sample => sample.Description.toLowerCase().includes(searchFilter.toLowerCase()));
      setFilteredSamples(filteredSamples);
    }
  }, [searchFilter])

  const orderSamplesByFieldToggle = (fieldFilter: string) => {
    const orderedSamplesByField = filteredSamples?.sort((a: any, b: any) => {
      if (a[fieldFilter] < b[fieldFilter]) {
        return -1;
      }
      if (a[fieldFilter] > b[fieldFilter]) {
        return 1;
      }
      return 0;
    }).reverse();
    setFilteredSamples(orderedSamplesByField);
  }

  useEffect(() => {
    orderSamplesByFieldToggle(fieldFilter);
    console.log('filteredSamples', filteredSamples);
  }, [fieldFilter])

  const handleSearchByText = (event: any) => {
    setSearchFilter(event.target.value);
  }

  const handleDropdown = (e: any) => {
    setShowFilterDropdown(!showFilterDropdown);
  }

  return (
    <Container>
      <TopMenu className='topmenu'>
        <h2>Esto es Sample Unit</h2>
        <input onChange={handleSearchByText} className="top-menu__search" placeholder="Search..." />
        <ul>
          <li>
            <Link className="top-menu__button" to={`/${parent}/create`}><MdCreateNewFolder /></Link>
          </li>
          <li style={{ position: 'relative' }}>
            <Link className="top-menu__button" to={`/${parent}`} onClick={handleDropdown}><AiFillFilter /></Link>
            {showFilterDropdown &&
              <Dropdown>
                <a href="/">
                  Order By Date
                </a>
                <a href="/">
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
      <SamplesList>
        <div className={cardStyle === true ? 'card-list' : 'list-list'}>
          {filteredSamples && cardStyle &&
            filteredSamples.map((sample: SampleProps) => (
              <SampleItem className="item" key={sample.SampleID}>
                <div className="item__header">
                  <button className='sample__button'>Editar</button>
                </div>
                {sample.SampleID && <p className="sample__sample-id">Sample ID: {sample.SampleID}</p>}
                {sample.ParticipantID && <p className='sample__owner sample__card-data'>Participant ID: {sample.ParticipantID}</p>}
                {sample.Type && <p className='sample__title sample__card-data'>Type of Sample: {sample.Type}</p>}
                {sample.Temperature && <p className='sample__description sample__card-data'>Temperature: {sample.Temperature}</p>}
                {sample.Amount && <p className='sample__startdate sample__card-data'>Amount: {sample.Amount} ml</p>}
                {sample.FreezerID && <p className='sample__owner sample__card-data'>Freezer Number: {sample.FreezerID}</p>}
                {sample.ShelvingID && <p className='sample__enddate sample__card-data'>Shelving Number: {sample.ShelvingID}</p>}
                {sample.BoxID && <p className='sample__startdate sample__card-data'>Box ID: {sample.BoxID}</p>}
                {sample.BoxSlotID && <p className='sample__startdate sample__card-data'>Box Slot ID: {sample.BoxSlotID}</p>}
                {sample.TakingDate && <p className='sample__enddate sample__card-data'>Taking Date: {sample.TakingDate}</p>}
                {sample.Description && <p className='sample__description sample__card-data'>Description: {sample.Description}</p>}
                {<p className='sample__owner'>Actually on Loan: {sample.OnLoan.toString()}</p>}
              </SampleItem>)
            )}
          {filteredSamples && !cardStyle && (
            <div style={{ width: '100%' }}>
              <div className="item__header">
                <button type="button" onClick={() => setFieldFilter('SampleID')}>SampleID</button>
                <button type="button" onClick={() => setFieldFilter('ParticipantID')}>ParticipantID</button>
                <button type="button" onClick={() => setFieldFilter('Type')}>Type</button>
                <button type="button" onClick={() => setFieldFilter('Temperature')}>Temp.</button>
                <button type="button" onClick={() => setFieldFilter('Amount')}>Amount</button>
                <button type="button" onClick={() => setFieldFilter('FreezerID')}>FreezerID</button>
                <button type="button" onClick={() => setFieldFilter('ShelvingID')}>ShelvingID</button>
                <button type="button" onClick={() => setFieldFilter('BoxID')}>BoxID</button>
                <button type="button" onClick={() => setFieldFilter('BoxSlotID')}>BoxSlotID</button>
                <button type="button" onClick={() => setFieldFilter('TakingDate')}>TakingDate</button>
                <button type="button" onClick={() => setFieldFilter('Description')}>Description</button>
                <button type="button" onClick={() => setFieldFilter('OnLoan')}>OnLoan</button>
                <button type="button" onClick={() => setFieldFilter('ProjectID')}>ProjectID</button>
                <p>options</p>
              </div>
              <div>
                {filteredSamples.map((sample: SampleProps) => (
                  <SampleItem key={sample.SampleID}>
                    {sample?.SampleID && <p>{sample?.SampleID}</p>}
                    {sample?.ParticipantID && <p>{sample?.ParticipantID}</p>}
                    {sample?.Type && <p>{sample?.Type}</p>}
                    {sample?.Temperature && <p>{sample?.Temperature}º C</p>}
                    {sample?.Amount && <p>{sample?.Amount} ml</p>}
                    {sample?.FreezerID && <p>{sample?.FreezerID}</p>}
                    {sample?.ShelvingID && <p>{sample?.ShelvingID}</p>}
                    {sample?.BoxID && <p>{sample?.BoxID}</p>}
                    {sample?.BoxSlotID && <p>{sample?.BoxSlotID}</p>}
                    {sample?.TakingDate && <p>{sample?.TakingDate.slice(0, 10)}</p>}
                    {sample?.Description && <p>{sample?.Description.slice(0, 10)}</p>}
                    {<p>{sample?.OnLoan ? 'yes' : 'no'}</p>}
                    {sample?.ProjectID && <p>{sample?.ProjectID}</p>}
                    <p><button className='sample__button'>Editar</button></p>
                  </SampleItem>
                )
                )}
              </div>
            </div>
          )}
        </div>
      </SamplesList>
    </Container>
  )
}
export default ListSamples

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

const SamplesList = Styled.div`
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 1rem;
  background-color: #aaa;

// MODO CARD
  .card-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    grid-auto-rows: minmax(100px, auto);
    justify-content: space-between;
    align-items: center;

    .item {
      display: flex;
      width: 84%;
      padding: 1rem;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      gap: 0.1rem;
      border-radius: 1rem;
      box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
      
      .item__header {
        width: 100%;
        background: #666;
        border-radius: 0.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;
        grid-auto-rows: minmax(100px, auto);
        justify-content: space-between;
        align-items: center;
      }
      .sample__card-data {
        font-size: 0.8rem;
        color: #222;
        width: 40%;
        background: #ddd;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
    }
  }

// MODO LISTADO
  .list-list {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap; */

    .item__header {
      background: #1a1a1a;
      color: white;
      border-radius: 0.5rem;
      display: grid;
      margin: 0;
      padding: 0;
      grid-template-columns: minmax(70px, 70px) 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 3fr 3fr 1fr 1fr;
      /* grid-template-columns: repeat(13, 1fr); */
      width: 100%;
      align-items: center;
      font-size: 0.6rem;

      button {
        font-size: inherit;
        margin:0;
        padding:0.2rem 0;
        width: 100%;
      }
    }
    .item__grid {
      width: 100%;
      border-top: 1px solid #333;
      border-bottom: 1px solid #333;
    }
  }
`

const SampleItem = Styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: minmax(70px, 70px) 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 3fr 3fr 1fr 1fr;
  border-radius: 5px;
  font-size: 0.7rem;
  color: white;


  & > p {
    /* display: flex;
    justify-content: center;
    item-align: center;
    padding: 0rem 0; */
    
    /* border-left: 1px solid #333; */
  }
  &:nth-child(odd) {
    background: #7e7e7e;
  }
  &:nth-child(even) {
    background: #484848;    
  }

  .sample__button {
    font-size: 1rem;
    justify-self: center;
    align-self: center;
    padding: 0.3rem 0;
    background-color: hsl(120, 50%, 40%);
    cursor: pointer;
    border: 0;
    color: #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: hsl(120, 50%, 45%);
      border-radius: inherit;
      transition: all 0.2s ease-in-out;
    }
  }
`