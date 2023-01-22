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
import { useEffect, useState } from "react";
import SingleProductCard from "./SingleProductCard";
import { useSearchParams } from "react-router-dom";

export default function ProductContainer({ data, loading }) {
  const [cn, setCn] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const handelToggle = () => {
    setCn(!cn);
  };
  const [catagory, setCatagory] = useState([]);
  const [sort, setSort] = useState("");

  const handelFilterChange = (e) => {
    let arr = [...catagory];
    if (arr.includes(e.target.value)) {
      arr.splice(arr.indexOf(e.target.value), 1);
    } else {
      arr.push(e.target.value);
    }
    setCatagory(arr);
  };

  useEffect(() => {
    const param = {};
    param.catagory = catagory;
    param.sort = sort;
    setSearchParams(param);
  }, [catagory, sort]);

  const selectChange = (e) => {
    //setlect tag vlaue
    setSort(e.target.value);
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
          w="30%"
          justifyContent={"space-around"}
          alignItems="center"
        >
          {" "}
          <Box w="30%" className="select-tag">
            <Select
              size={"xm"}
              color="orange"
              placeholder="Select"
              onChange={selectChange}
            >
              <option value={"-price"}>Price H to L</option>
              <option value={"price"}>Price L To H</option>
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
              {" "}
              <Tab>Subcatagory</Tab> <Tab>Discount</Tab> <Tab>Price</Tab>
              <Tab>age</Tab> <Tab>gender</Tab>
              <Tab>color</Tab>
            </TabList>

            {cn ? (
              <TabPanels mb="20px">
                <TabPanel>
                  <HStack spacing={3}>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>GirlsTop</Text>
                      <input
                        type={"checkbox"}
                        onChange={handelFilterChange}
                        value={"girlstop"}
                        checked={catagory.includes("girlstop")}
                      />
                    </Box>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>Baby-Wipes</Text>
                      <input
                        type={"checkbox"}
                        onChange={handelFilterChange}
                        value={"babywipes"}
                      />
                    </Box>
                    <Box display={"flex"} gap={2}>
                      <Text fontSize={"1px"}>Boys-Tshirt</Text>
                      <input
                        type={"checkbox"}
                        onChange={handelFilterChange}
                        value={"boystshirt"}
                      />
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
            ) : null}
          </Tabs>
        </Box>
      </Box>

      <SingleProductCard data={data} loading={loading} />
    </Box>
  );
}
