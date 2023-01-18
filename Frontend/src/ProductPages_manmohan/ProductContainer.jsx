import "./product.css";
import { Box, Center, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";
const { log } = console;

export default function ProoductContainer(data) {
  const [cn,setCn]=useState(1)
    const handelToggle=()=>{
setCn(!cn)
    }


    const selectChange=(e)=>{
 console.log(e.target.value)
    }
  
    return (
    
      <Box w="100%" border={'1px solid red'} h="100vh"  >
        <Box display={"flex"} justifyContent="space-between" bg="#3C3D3C" >
          <Box p={2} ml={20}>
            <Text color={'white'} >The longest Story | upto 12+Y (...results)</Text>
          </Box>
          <Box
            display={"flex"}
            border="1px solid red"
            w="30%"
            justifyContent={"space-around"}
            alignItems="center"
          >
            {" "}
           
            <Box w="30%" className="select-tag">
              <Select size={'xm'} bg={'blackAlpha.500'} color="white" placeholder="Select" onChange={selectChange}  > 
                <option value={"new_arival"} >New Arival</option>
                <option value={"Best_seller"} >Best seller</option>
                <option value={"Discount"} >Discount</option>
                <option value={"Price"} >Price</option>
              </Select>
            </Box>
            <Box className="box">
              <Text>share G I G+</Text>
            </Box>
          </Box>
        </Box>
<Box className="filer" display={'flex'} bg="#363736"  alignItems={'center'} >
    <Box><Text color={'gray'} >FilterBy</Text></Box>
   
    <Tabs color={'white'} >
  <TabList>
    <Tab></Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

</Box>


      </Box>
      
   
  );
}
