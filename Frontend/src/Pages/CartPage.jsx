import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import AvailableOfferComponents from '../Components/Cart/AvailableOfferComponents'

const CartPage = () => {
  return (
    <div><Tabs size='md' variant='enclosed'>
    <TabList>
      <Tab>Shopping Cart</Tab>
      <Tab>My Shortlist</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
       <Box>
        <AvailableOfferComponents/>

       </Box>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs></div>
  )
}

export default CartPage