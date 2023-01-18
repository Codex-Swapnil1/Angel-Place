import { Box, Button, flexbox, Image, Input, InputGroup, InputRightElement, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import { Search2Icon } from "@chakra-ui/icons";
import logo from "../Resources/1.png"
import {CiHeart, CiLocationOn}from "react-icons/ci";
import {BsCart} from "react-icons/bs"
const Navbar = () => {
  return (
    <NavbarWrapper>
      <Box className='nav-top-left'>
        <Image className='logoimg' src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="logo"/>
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
      <ul className='desktop-nav-top-right'>
         <li className='location-nav'> <CiLocationOn fontSize={"18px"}/> Select location</li>
         <li>
                <Popover trigger="hover"
                  isLazy
                  openDelay={300}>
                <PopoverTrigger>
                <p>Stores & Preschools</p>
                </PopoverTrigger>
                <PopoverContent borderRadius="none" width={"auto"}>
                <PopoverBody >
                <ul className='nav-store-list'>
                  <li>Find Store</li>
                  <li>Find PreSchool</li>
                  <li>Open a Store</li>
                  <li>Open a PreSchool</li>
                </ul>

                </PopoverBody>
                </PopoverContent>
                </Popover>

         </li>
         <li>Support</li>
         <li>Track Order</li>
         <li>FirstCry Parenting</li>
         <li className='nav-login' style={{textDecoration:"none"}}>Login / Register</li>
         <li className='location-nav' ><CiHeart fontSize={"20px"}/>Shortlist</li>
      </ul>
      </Box>
      <Box className='location-nav' style={{borderRight:"none",fontWeight:"400",fontSize:"18px"}}>
         <p style={{fontWeight:"lighter",fontSize:"13px", position: "relative",
                      left: "31px",
                      top:"7px",
                      cursor: "pointer",
                      opacity: "1",
                      zIndex: "101px",
                      padding: "0px",
                      margin: "0px",
                      color:"#ff7043",
                      fontWeight:"bold"
                      }}>0</p>
         <BsCart fontWeight={"light"} fontSize={"38px"}/>Cart
        </Box>
      </Box>

      </Box>
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.div`
display: flex;
padding : 10px 4%;
justify-content : space-between;
gap:5px;
.nav-top-left{
  display : flex;
  gap : 5px;
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


`
