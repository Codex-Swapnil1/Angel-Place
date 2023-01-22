import { Box } from '@chakra-ui/react'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MoreComponent from './MoreComponent'

const TabletNavbar = () => {
  return (
    <NavWrapper>
        <ul className='tablet-nav-top-right'>
            <li className='location-navv'> <CiLocationOn fontSize={"16px"}/> Select location</li>
            <li>FirstCry Parenting</li>
            <li><MoreComponent/></li>
           <Link to="/login"> <li className='nav-login' style={{textDecoration:"none"}}>Login / Register</li></Link>
        </ul>
    </NavWrapper>
  )
}

export default TabletNavbar

const NavWrapper = styled.div`
.tablet-nav-top-right{
  list-style-type: none;
  display : flex;
  gap : 8px;
  font-size : 11px;
  cursor : pointer;
}
.tablet-nav-top-right li{
  :hover{
    text-decoration: underline;
  }
  border-right: 0.5px solid lightgray;
  margin:0px;
  padding-right: 5px;
  }
  .location-navv{
    display: flex;
    gap : 5px;
  }
`