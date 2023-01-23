<<<<<<< HEAD
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import AddressComponent from "../Components/Cart/AddressComponent";
import AvailableOfferComponents from "../Components/Cart/AvailableOfferComponents";
import ProductCart from "../Components/Cart/ProductCart";

const CartPage = () => {
   
  const getCart=()=>{
    axios.get("http://localhost:8080/user/")
  }

  return (
    <div>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Shopping Cart</Tab>
          <Tab>My Shortlist</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box>
              <AvailableOfferComponents />
              <AddressComponent />
              <ProductCart />
            </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default CartPage;
=======
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import AddressComponent from '../Components/Cart/AddressComponent'
import AvailableOfferComponents from '../Components/Cart/AvailableOfferComponents'
import ProductCart from '../Components/Cart/ProductCart';
import logo from "../Resources/1.png"

const CartPage = () => {
  const cart = useSelector((store)=>store.Appreducer)
  console.log(cart)
  return (
    <Wrapper>
    <Box className='navcart'>
      <Box >
        <Image className='logoimg' src={logo} alt="logo" />
      </Box> <Box>Login / Register</Box>
    </Box>
    <Tabs size='md' variant='enclosed'>
    <TabList>
      <Tab>Shopping Cart</Tab>
      <Tab>My Shortlist</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
       <Box>
        <AvailableOfferComponents/>
        <AddressComponent/>
        <ProductCart/>
       </Box>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs></Wrapper>
  )
}

export default CartPage;

const Wrapper = styled.div`
.navcart{
  max-width:80%;
  display:flex;
  justify-content:space-between;
  margin: auto;
}
.logoimg{
  max-width: 110px;
  border-radius : 5px
}
`
>>>>>>> dec121d4be2c6f03a7e746c36250ddd14f744937
