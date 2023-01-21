import React from 'react'
import FooterPage from '../Components/FooterPage'
import HomepageMid from '../Components/Homepage Components/HomepageMid'
import ScrollButton from '../Components/Homepage Components/ScrollButton'
import Slider from '../Components/Homepage Components/Slider'
import Navbar from '../Components/Navbar'

const Homepage = () => {
  return (
    <div>
    <Navbar/>
    <Slider/>
    <HomepageMid/>
    <FooterPage/>
    <ScrollButton/>
    </div>
  )
}

export default Homepage