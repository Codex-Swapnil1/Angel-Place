import { Box, Button, flexbox, Image, Input, InputGroup, InputRightElement, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import logo from "../Resources/1.png"
import {CiHeart, CiLocationOn}from "react-icons/ci";
import {BsCart} from "react-icons/bs"
// import { category } from '../Resources/navbar';

import BoysFashion from './sub_nav_component/BoysFashion';
import GirlsFashion from './sub_nav_component/GirlsFashion';
import PreschoolComponent from './sub_nav_component/PreschoolComponent';
import DeskstopNavList from './sub_nav_component/DeskstopNavList';
import TabletNavbar from './sub_nav_component/TabletNavbar';
const Navbar = () => {
  return (
    <NavbarWrapper>
    <Box className='nav-top'>
      <Box className='nav-top-left'>
        <Image className='logoimg' src={logo} alt="logo"/>
        <Box sx={{marginRight:"5px"}}>
        <InputGroup>
                          <Input
                            htmlSize={38}
                            width='100%'
                            fontSize={"13px"}
                            placeholder="Search for Category, Brand or Products"
                            focusBorderColor="lightgray"
                            borderStyle={"dotted"}
                            borderRadius={"0px"}
                          />
                          <InputRightElement >
                            <Button
                              children={<Search2Icon size="md" />}
                              backgroundColor="Background"
                              color={"#ff7043"}
                              size="md"
                            ></Button>
                          </InputRightElement>
                        </InputGroup>
        </Box>
      </Box>
      <Box className='nav-top-right'>
      <Box sx={{display:"flex"}}>
      <Box sx={{paddingTop:"5px"}}>
      <Box className='desktop-nav-list'>
      <DeskstopNavList/>
      </Box>
      <Box className='tablet-nav-list'>
        <TabletNavbar/>
      </Box>
      </Box>
      <Box className='location-nav'>
         <p className='count-position'>0</p>
         <BsCart className="cart-css" />
        </Box>
      </Box>

      </Box>
    </Box>
    <Box className='nav-bottom'>
      <p>ALL CATEGORIES <ChevronDownIcon  boxSize={"25px"}/></p>
      <Box className='category-list'>
        <Box><BoysFashion/></Box>
        <Box><GirlsFashion/></Box>
        <Box>FOOTWEAR</Box>
        <Box>TOYS</Box>
        <Box>DIAPERING</Box>
        <Box>GEAR</Box>
        <Box>FEEDING</Box>
        <Box>BATH</Box>
        <Box>NURSERY</Box>
        <Box>MOMS</Box>
        <Box>HEALTH</Box>
        <Box>BOUTIQUES</Box>
        <Box>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png" alt="club"/>
        </Box>
      </Box>
      <Box>
        <Image src="https://cdn.fcglcdn.com/brainbees/banners/FC-menu-carters-logo.webp" alt="carters"/>
      </Box>
    </Box>
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.div`
.nav-top{
  display: flex;
padding : 10px 4%;
justify-content : space-between;
gap:5px;
}
.nav-top-left{
  display : flex;
  gap : 5px;
  max-height: 50px;
}
.logoimg{
  width: 113px;
  border-radius : 5px

}
.desktop-nav-top-right{
  list-style-type: none;
  display : flex;
  gap : 10px;
  font-size : 12px;
  cursor : pointer;
}
.desktop-nav-top-right li{
  :hover{
    text-decoration: underline;
  }
  border-right: 0.5px solid lightgray;
  margin:0px;
  padding-right: 5px;
  }
  .location-nav{
    display: flex;
    gap : 5px;
    border-right:none;
    font-weight:400;
  }

  .count-position{
    font-weight:lighter;
    font-size:13px;
    position: relative;
    left: 31px;
    top:7px;
    cursor: pointer;
    opacity: 1;
    z-index: 101px;
    padding: 0px;
    margin: 0px;
    color:#ff7043;
    font-weight:bold;
  }

  .nav-store-list{
    list-style-type: none;

  }
  .nav-store-list li{
    cursor: pointer;
    border-right: none;
    :hover{
      text-decoration: none;
      background-color: #f2f2f2;
    };
    margin: 10px 0px;
  }
.category-list{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.category-list div{
  cursor: pointer;
  font-size: 14px;
    border-right: none;
    :hover{
      text-decoration: none;
      background-color: white;
    };
    font-weight: 400;
    padding: 5px 6px;
}
.nav-bottom{
  background-color:#ffd91c;
  padding:0px 4%;
  display: flex;
  margin: auto;
  text-align: center;
  font-size: 14px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

// cart logo
.cart-css{
  font-weight:light;
  font-size:38px;
}

@media only screen and (min-width: 1200px){
.desktop-nav-list{
  display: block;
}
.tablet-nav-list{
  display: none;
}
}

@media only screen and (min-width: 770px) and (max-width: 1200px){
.desktop-nav-list{
  display: none;
}
.tablet-nav-list{
  display: block;
}

.cart-css{
  font-weight:light;
  font-size:30px;
}
.count-position{
    font-weight:lighter;
    font-size:13px;
    position: relative;
    left: 26px;
    top:4px;
    cursor: pointer;
    opacity: 1;
    z-index: 101px;
    padding: 0px;
    margin: 0px;
    color:#ff7043;
    font-weight:bold;
  }
  .nav-bottom{
    background-color:#ffd91c;
  padding:0px 4%;
  display: flex;
  margin: auto;
  text-align: center;
  font-size: 11px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  .category-list{
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.category-list div{
  cursor: pointer;
  font-size: 11px;
    border-right: none;
    :hover{
      text-decoration: none;
      background-color: white;
    };
    font-weight: 400;
    padding: 5px 6px;
}
}
@media only screen and (min-width: 320px) and (max-width: 770px){
.desktop-nav-list{
  display: none;
}
.tablet-nav-list{
  display: block;
}
.cart-css{
  font-weight:light;
  font-size:38px;
}
.cart-css{
  font-weight:light;
  font-size:30px;
}
.count-position{
    font-weight:lighter;
    font-size:13px;
    position: relative;
    left: 26px;
    top:4px;
    cursor: pointer;
    opacity: 1;
    z-index: 101px;
    padding: 0px;
    margin: 0px;
    color:#ff7043;
    font-weight:bold;
  }
  .location-nav{
  display: flex;
    gap : 5px;
    border-right:none;
    font-weight:400;
    font-size:16px;
}
.nav-bottom{
    background-color:#ffd91c;
  padding:0px 4%;
  display: flex;
  margin: auto;
  text-align: center;
  font-size: 11px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
.category-list{
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.category-list div{
  cursor: pointer;
  font-size: 11px;
    border-right: none;
    :hover{
      text-decoration: none;
      background-color: white;
    };
    font-weight: 400;
    padding: 5px 6px;
}
}

`
