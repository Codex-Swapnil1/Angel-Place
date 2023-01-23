import { Box } from '@chakra-ui/react'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { GiDivert } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MoreComponent from './MoreComponent'

const TabletNavbar = () => {
  return (
    <div>
        <ul className='tablet-nav-top-right'>
            <li className='location-navv'> <CiLocationOn fontSize={"16px"}/> Select location</li>
            <li className='parents'>FirstCry Parenting</li>
            <li className='more-component'><MoreComponent/></li>
           <Link to="/login"> <li className='nav-login' style={{textDecoration:"none"}}>Login / Register</li></Link>
        </ul>
    </div>
  )
}

export default TabletNavbar
