import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddressComponent from "../Components/Cart/AddressComponent";
import AvailableOfferComponents from "../Components/Cart/AvailableOfferComponents";
import ProductCart from "../Components/Cart/ProductCart";

const CartPage = () => {
  const cartdata = useSelector((store) => store.Appreducer.data.cart);

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
              <ProductCart cartdata={cartdata} />

              <Button bg="pink.400">
                <Link to="/payment">checkout</Link>
              </Button>
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
