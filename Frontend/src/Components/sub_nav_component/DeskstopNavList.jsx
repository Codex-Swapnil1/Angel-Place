import React from 'react'
import { CiHeart, CiLocationOn } from 'react-icons/ci'
import PreschoolComponent from './PreschoolComponent'

const DeskstopNavList = () => {
  return (
    <ul className='desktop-nav-top-right'>
         <li className='location-nav'> <CiLocationOn fontSize={"18px"}/> Select location</li>
         <li>
               <PreschoolComponent/>
         </li>
         <li>Support</li>
         <li>Track Order</li>
         <li>FirstCry Parenting</li>
         <li className='nav-login' style={{textDecoration:"none"}}>Login / Register</li>
         <li className='location-nav' ><CiHeart fontSize={"20px"}/>Shortlist</li>
      </ul>
  )
}

export default DeskstopNavList