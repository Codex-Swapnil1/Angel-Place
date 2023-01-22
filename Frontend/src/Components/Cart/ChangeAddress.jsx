import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FcHome } from 'react-icons/fc'

const ChangeAddress = ({handleAddress,data}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [address,setAddress]= useState(data.address);
  const [name,setName]= useState(data.name);
  const [pin,setPin]= useState(data.pincode);
  const [city,setCity]= useState(data.city);
  const isError = address === ''
  const handleInputAddress = (e) => setAddress(e.target.value);
  const handleInputCity = (e) => setCity(e.target.value);
  const handleInputPin = (e) => setPin(e.target.value);
  const handleInputName = (e) => setName(e.target.value);

  const handleSubmit=()=>{
    const payload={
        name: name,
        address: address,
        city: city,
        pincode: pin,
        status: true,
    }
    handleAddress(payload)
    onClose();
  }
  return (
    <>
    <Box>
    <FcHome fontSize={"38px"}/> Deliver to {data.name} (Home)
    <Box>{data.address} </Box>
    <Box>{data.city}-{data.pincode}</Box>

    </Box>
      <Button ref={btnRef} colorScheme='orange' onClick={onOpen}>
        Change
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add Address</DrawerHeader>

          <DrawerBody>
          <Stack spacing={4}>
          <Box>
            <Box>
                Full Name
            </Box>
            <Input placeholder='Type here...' value={name} onChange={handleInputName} />
          </Box>
          <Box>
            <Box>
                Address
            </Box>
            <Input isInvalid={isError}  placeholder='Type here...' value={address} onChange={handleInputAddress} />
            {isError ? <Box>Please add address</Box> : ""}
          </Box>
          <Box>
            <Box>
                City
            </Box>
            <Input placeholder='Type here...' value={city} onChange={handleInputCity}/>
          </Box>
          <Box>
            <Box>
                PinCode
            </Box>
            <Input placeholder='Type here...' value={pin} onChange={handleInputPin}/>
          </Box>
          </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={handleSubmit}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


export default ChangeAddress