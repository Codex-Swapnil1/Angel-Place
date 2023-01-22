import React, { useState } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Image } from '@chakra-ui/react';
import AddAddress from './AddAddress';
import ChangeAddress from './ChangeAddress';
const AddressComponent = () => {
    const [addressData,setAddressData]=useState({
        name: "",
        address:"",
        city: "",
        pincode:"",
        status: false,
    })
    const handleAddress =(payload)=>{
        setAddressData(payload)
    }
  return (
    <Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        Address
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {addressData.status === false ? <AddAddress handleAddress={handleAddress}/> : <ChangeAddress data={addressData} handleAddress={handleAddress}/> }
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  )
}

export default AddressComponent ;