import { Box } from '@chakra-ui/react'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { GiDivert } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MoreComponent from './MoreComponent'

const TabletNavbar = () => {
  return (
    <Tabletnav>
        <ul className='tablet-nav-top-right'>
            <li className='location-navv'> <CiLocationOn fontSize={"16px"}/> Select location</li>
            <li className='parents'>FirstCry Parenting</li>
            <li className='more-component'><MoreComponent/></li>
           <Link to="/login"> <li className='nav-login' style={{textDecoration:"none"}}>Login / Register</li></Link>
        </ul>
    </Tabletnav>
  )
}

export default TabletNavbar

const Tabletnav = styled.div`
.tablet-nav-top-right{
      list-style-type: none;
    display: flex;
    gap: 10px;
    font-size: 11px;
    cursor: pointer;
    }
    .tablet-nav-top-right li{
      :hover {
      text-decoration: underline;
    }
    border-right: 0.5px solid lightgray;
    margin: 0px;
    padding-right: 5px;
    }
    .location-navv {
    display: flex;
    gap: 5px;
    border-right: none;
    font-weight: 400;
  }
    @media only screen and (min-width: 320px) and (max-width: 650px){
      .location-navv{
        display: none;
      }
      .parents{
        display: none;
      }
    }
`