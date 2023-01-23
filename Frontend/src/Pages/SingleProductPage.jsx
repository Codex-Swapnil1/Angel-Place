import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { addProductData } from "../Redux/App/action";
// import YoutubeVideo from '../Components/YoutubeVideo';
import "../CSS/SingleProductPage.css";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

import axios from "axios";
import Navbar from "../Components/Navbar";

const SingleProductPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [currrentPro, setCurrentPro] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  useEffect(() => {
    axios.get(`https://lazy-puce-fawn.cyclic.app/api/products/${id}`).then((res) => {
      // console.log(res.data.products[0])
      setData(res.data.products[0]);
    });
  }, [id]);

  const userid = useSelector((store) => store.Authreducer.data.user?._id);

  const getcart = (userid) => {
    axios
      .get(`https://lazy-puce-fawn.cyclic.app/user`)
      .then((res) => console.log(res.data));
  };
  // getcart(userid)

  const addToBag = () => {
    onClose();

    dispatch(addProductData(data));
  };

  const cart = useSelector((store) => store.Appreducer.data.cart);


  return (
    <>
      <Navbar />
    <div style={{ margin: "10%", marginTop: "20px" }}>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} className="single-div">
        <img className="single-div-img" src={data.img} />

        <div
          style={{ lineHeight: "30px", marginLeft: "5%", marginRight: "5%" }}
        >
          <Heading as="h6">
            <b>{data.title}</b>
          </Heading>

          <Text fontSize="lg">{data.description}</Text>

          {currrentPro.shadeCount !== "" ? (
            <p>{currrentPro.shadeCount}</p>
          ) : (
            <p>{currrentPro.shadeCount} </p>
          )}

          <Text fontSize="lg">
            <StarIcon color={"pink"} />4 | 40 ratings{" "}
          </Text>

          <Text fontSize="lg">
            <strike>{data.mrp}</strike>
            <span className="dis">{data.discount}</span>
          </Text>

          <Text fontSize="lg">
            <b> {data.price}</b>
            <span className="dis">(MRP incl. of all taxes)</span>
          </Text>

          <>
            <Button
              leftIcon={<StarIcon />}
              colorScheme="orange"
              onClick={onOpen}
            >
              ADD TO Cart
            </Button>

            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Product is adding to bag...
                  </AlertDialogHeader>

                  <AlertDialogBody>Are you sure?</AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      CANCEL
                    </Button>
                    <Button colorScheme="red" onClick={addToBag} ml={3}>
                      ADD
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </>

          <br></br>

          <div>
            <br></br>
            <Heading
              as="h6"
              style={{
                backgroundColor: "",
                width: "auto",
                padding: "5px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
                You will receive <b> cashback worth ₹10 </b> as
                angelplace_Points on this purchase
            </Heading>
            <br></br>
            <Text fontSize="lg">
              Note : Mix of Taxes and discount may change depending the amount
              of tax being borne by the Company. However, the final price as
              charged from customer will remain same. Taxes collected against
                every transaction will be paid to the Government by
                FirstCry.com. Please refer to the Terms of Use for full details.
            </Text>

            <br></br>
            <ul>
              <Text fontSize="lg">
                <b>Product Description</b>
              </Text>
              <li>Fabric - 100% Cotton/Knit</li>
              <li>Ready To wash </li>
              <li>Long wearing formula</li>
              <li>High immediate pay off</li>
              <li>Lightweight and comfortable on childrens</li>
            </ul>
            <br></br>

            <Text fontSize="lg">
              <b>Net Weight:</b>4.5 g
            </Text>
            <br></br>

            <Text fontSize="lg">
              <b>Country of Origin:</b>Formulated in Itely
            </Text>
            <br></br>
            <Text fontSize="lg">
              <b>Disclaimer:</b>This product is available on high demands.
            </Text>

            <Text fontSize="lg">
              <b>Important:</b>All products that will be shipped will have a
              shelf-life of minimum 8 months to 12 months.
            </Text>
          </div>
        </div>
      </SimpleGrid>
    </div>
    </>
  );
};

export default SingleProductPage;
