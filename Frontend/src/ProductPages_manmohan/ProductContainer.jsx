import "./product.css";
import {
  Box,
  Center,
  HStack,
  Radio,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import SingleProductCard from "./SingleProductCard";

export default function ProductContainer({ data, loading }) {
  const [cn, setCn] = useState(0);
  const handelToggle = () => {
    setCn(!cn);
    
  };

  const selectChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Box w="100%">
      <Box display={"flex"} justifyContent="space-between" bg="#3C3D3C">
        <Box p={2} ml={20}>
          <Text color={"white"}>
            The longest Story | upto 12+Y (...results)
          </Text>
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
            <Select
              size={"xm"}
              bg={"blackAlpha.500"}
              color="white"
              placeholder="Select"
              onChange={selectChange}
            >
              <option value={"new_arival"}>New Arival</option>
              <option value={"Best_seller"}>Best seller</option>
              <option value={"Discount"}>Discount</option>
              <option value={"Price"}>Price</option>
            </Select>
          </Box>
          <Box className="box">
            <Text>share G I G+</Text>
          </Box>
        </Box>
      </Box>

      <Box bg="#363637" mb="20px">
        <Box
          className="filer"
          display={"flex"}
          bg="#363637"
          w="35%"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Box>
            <Text color={"gray"}>FilterBy</Text>
          </Box>

          <Tabs color={"white"}>
            <TabList onClick={handelToggle}>
              <Tab>Subcatagory</Tab>
              <Tab>Discount</Tab>
              <Tab>Price</Tab>
              <Tab>age</Tab>
              <Tab>gender</Tab>
              <Tab>color</Tab>
            </TabList>

            {  (
              <TabPanels mb="20px">
                <TabPanel>
                  <HStack spacing={3}>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>Bath Item</Text>
                      <input color="" type={"checkbox"} />
                    </Box>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>Shorts</Text>
                      <input type={"checkbox"} />
                    </Box>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>Skirts</Text>
                      <input type={"checkbox"} />
                    </Box>
                  </HStack>
                </TabPanel>
                <TabPanel>
                  <HStack spacing={3}>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>20-30%</Text>
                      <input type={"checkbox"} />
                    </Box>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>30-40%</Text>
                      <input type={"checkbox"} />
                    </Box>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>above 40%</Text>
                      <input type={"checkbox"} />
                    </Box>
                  </HStack>
                </TabPanel>
                <TabPanel>
                  <HStack spacing={3}>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>250-500</Text>
                      <input type={"checkbox"} />
                    </Box>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>500-800</Text>
                      <input type={"checkbox"} />
                    </Box>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>800-above</Text>
                      <input type={"checkbox"} />
                    </Box>
                  </HStack>
                </TabPanel>
              </TabPanels>
            ) }
          </Tabs>
        </Box>
      </Box>

      <SingleProductCard data={data} loading={loading} />
    </Box>
  );
}
