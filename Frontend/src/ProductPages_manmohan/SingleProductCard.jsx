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
import { Button } from "antd";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "./loading";


export default function SingleProductCard({ data }) {
  let date = new Date();
  date.setDate(date.getDate() + 5);

  const [st, setst] = useState(false);

  const navigate = useNavigate();
  const loading = useSelector((store) => store.Appreducer.isLoading);
 

  const MoveTocart = (id) => {
    navigate(`/product/${id}`);
  };
  if(loading){
    return<div><Loading></Loading></div>
  }

  return (
    <>
      <Box className="singlePr">
        {data.length > 0
          ? data.map((elm) => {
              return (
              
                <Singleproductwrapper key={elm._id}>
                  <Box className="single-child">
                    <Image src={elm.img} alt="img" />
                    <VStack textAlign="center" className="a">
                      <Text as={"i"} noOfLines={1}>
                        {" "}
                        {elm.title}
                      </Text>
                      <Box w="full" className="ab">
                        <Text fontSize={"xs"}>
                          all size and color availble{" "}
                        </Text>
                        <Box
                          display={"flex"}
                          m="auto"
                          gap={"1"}
                          alignItems="center"
                          className="price-tag"
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
                    <Box className="showdiv">
                      <Text fontSize={"xs"} onClick={() => MoveTocart(elm._id)}>
                        Add to cart
                      </Text>
                    </Box>
                  </Box>
                </Singleproductwrapper>
              );
            })
          : ""}
      </Box>
    </>
  );
}

const Singleproductwrapper = styled.div`
  .single-child {
    :hover {
    .showdiv{
      display:block
    }
    .price-tag{
      display:none
    }
     
    }
   
  }
  .showdiv{
    display:none
  }

  }
`;
