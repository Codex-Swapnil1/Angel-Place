import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';

const AvailableOfferComponents = () => {
  return (
    <Offerwrapper>
    <Box className='offer'>
        <Image w="16px" h="16px" src="https://cdn.fcglcdn.com/brainbees/checkout/pers.jpg" alt="offer" />
        <Box fontWeight={"bolder"}>Available offers:</Box>
    </Box>
    <Box>
        <ul className='list-offer-css'>
            <li>Upto Rs. 500 Cashback on Paytm Wallet and Postpaid Transactions (Minimum Order Value: Rs. 1000) <span>T&C</span></li>
            <li>Get 5% Instant Discount Upto Rs. 500 on SBI Credit Cards (Minimum Order Value: Rs. 2000)<span>T&C</span></li>
            <li>Pay using Simpl and get 5% cashback upto Rs.250 (Minimum Order Value: Rs. 1200)<span>T&C</span></li>
            <li>Get 2X cashback upto Rs. 500 on CRED Pay UPI(Minimum Order Value: Rs.1000)<span>T&C</span></li>
        </ul>
    </Box>
    </Offerwrapper>
  )
}

export default AvailableOfferComponents;

const Offerwrapper = styled.div`
.offer{
    display: flex;
    gap: 5px;
    font-size: 14px;
}
.list-offer-css{
    margin: 1px 6px 0px 30px;
    color: #424242;
    font-size: 13px;
}
.list-offer-css li{
    padding: 2px;
}
.list-offer-css span{
    color: #2979ff;
    cursor: pointer;
    margin-left: 5px;
}


`