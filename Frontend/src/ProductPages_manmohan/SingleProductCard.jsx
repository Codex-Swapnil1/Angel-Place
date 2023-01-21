import {
  Box,
  GridItem,
  Image,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
  Grid,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function SingleProductCard({ data, loading }) {
  let date = new Date();
  date.setDate(date.getDate() + 5);
  const ref = useRef(null);
  const [st, setst] = useState(false);



  return (
    <>
      <Box className="singlePr">
        {data.length > 0
          ? data.map((elm) => {
              return loading ? (
                <Box
                  key={elm._id}
                  padding="6"
                  boxShadow="lg"
                  bg="white"
                  w="full"
                >
                  <SkeletonCircle size="10" />
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
                  />
                </Box>
              ) : (
                <Box ref={ref} key={elm._id} className="single-child">
                  <Image src={elm.img} alt="img" />
                  <VStack textAlign="center">
                    <Text as={"i"} noOfLines={1}>
                      {" "}
                      {elm.title}
                    </Text>
                    <Box w="full">
                      <Text fontSize={"xs"}>all size and color availble </Text>
                      <Box
                        w="50%"
                        display={"flex"}
                        m="auto"
                        gap={"1"}
                        alignItems="center"
                      >
                        <Text fontSize={"xs"} as="b">
                          ₹{elm.price}
                        </Text>
                        |
                        <Text as="del" fontSize={"xs"}>
                          ₹{elm.mrp}
                        </Text>
                        <Text>{elm.discount}</Text>
                      </Box>
                    </Box>
                  </VStack>
                </Box>
              );
            })
          : ""}
      </Box>
    </>
  );
}
