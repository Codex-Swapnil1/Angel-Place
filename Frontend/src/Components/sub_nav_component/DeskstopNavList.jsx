import React from 'react'
import { CiHeart, CiLocationOn } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import PreschoolComponent from './PreschoolComponent'

const DeskstopNavList = () => {
    const navigate = useNavigate();
  return (
    <ul className='desktop-nav-top-right'>
         <li className='location-nav'> <CiLocationOn fontSize={"18px"}/> Select location</li>
         <li>
               <PreschoolComponent/>
         </li>
         <li>Support</li>
         <li>Track Order</li>
         <li>FirstCry Parenting</li>
         <li className='nav-login' style={{textDecoration:"none"}} onClick={()=>{
            navigate('/login')
         }}>Login / Register</li>
         <li className='location-nav' ><CiHeart fontSize={"20px"}/>Shortlist</li>
      </ul>
  )
}

export default DeskstopNavList