import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import AddressComponent from "../Components/Cart/AddressComponent";
import AvailableOfferComponents from "../Components/Cart/AvailableOfferComponents";
import ProductCart from "../Components/Cart/ProductCart";

const CartPage = () => {
   


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
