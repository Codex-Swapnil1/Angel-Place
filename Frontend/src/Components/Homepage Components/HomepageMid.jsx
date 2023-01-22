import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { brand, premium } from "../../Resources/homepagedata";

import { Link } from "react-router-dom";
const HomepageMid = () => {
  return (
    <MainContainerWrapper>
      <Box className="premium-main">
        <h1
          style={{
            fontSize: "24px",
            textAlign: "center",
            fontWeight: "450",
            marginBottom: "8px",
          }}
        >
          PREMIUM BOUTIQUES
        </h1>
        <SimpleGrid columns={[2, null, 3]} spacing="20px">
          {premium.map((data, index) => {
            return (
              <Box key={index + 1} className="premium-card">
                <Box>
                  <Link to="/product">
                    {" "}
                    <Image
                      borderTopRadius={"5px"}
                      src={data.image}
                      alt={data.name}
                    />
                  </Link>
                </Box>
                <Box className="premium-name-container-css">
                  <h2 className="premium-name-css">{data.name}</h2>
                  <p className="premium-subname-css">{data.subname}</p>
                  <Box className="premium-button-css">
                    <button>SHOP NOW</button>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
        <Box className="premium-all-container">
          <Box className="premium-all">View All Boutiques </Box>
          <Box className="premium-all">View All Premium Brands </Box>
        </Box>
      </Box>
      <Box className="spirit-sale-container">
        <Grid templateColumns="repeat(6, 1fr)">
          <GridItem colSpan={6}>
            <Image
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_447_desktop_SOI_2023_01.jpg"
              alt="top-img1"
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Image
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_02.jpg"
              alt="top-img2"
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Image
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_03.jpg"
              alt="top-img3"
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Image
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_04.jpg"
              alt="top-img4"
            />
          </GridItem>
        </Grid>
      </Box>
      <Box className="brands-css">
        <Box>
          <Image
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_179_desktop_SOI_2023_05.jpg"
            alt="top-img5"
          />
        </Box>
        <Box>
          <SimpleGrid columns={[2, null, 4]}>
            <Box maxWidth="315px">
              <Image
                src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_05.jpg"
                alt="top-img6"
              />
            </Box>
            <Box maxWidth="315px">
              <Image
                src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_06.jpg"
                alt="top-img6"
              />
            </Box>
            <Box maxWidth="315px">
              <Image
                src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_07.jpg"
                alt="top-img6"
              />
            </Box>
            <Box maxWidth="315px">
              <Image
                src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_08.jpg"
                alt="top-img6"
              />
            </Box>
          </SimpleGrid>
        </Box>
        <Box>
          <Image
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_228_desktop_SOI_2023_18.jpg"
            alt="brand banner"
          />
        </Box>
        <SimpleGrid columns={[4, null, 8]} spacing="5px">
          {brand.map((data, index) => {
            return (
              <Box key={index + 3}>
                <Image src={data.image} alt="brands" />
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </MainContainerWrapper>
  );
};

export default HomepageMid;

const MainContainerWrapper = styled.div`
  .brands-css {
    padding: 31px 9% 26px;
  }
  .spirit-sale-container {
    padding: 31px 9% 26px;
  }
  .premium-main {
    margin-top: 8px;
    background-color: #eeeeee;
    padding: 31px 9% 26px;
  }
  .premium-card {
    max-width: 387px;
    ${"" /* background-color:#e7e8a7; */}
    cursor:pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #fff;
    margin-right: 1.5%;
    margin-bottom: 1.5%;
    float: left;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    bottom: 0;
    transition: box-shadow 150ms ease-out, bottom 0.2s ease;
    -webkit-transition: box-shadow 150ms ease-out, bottom 0.2s ease;
    -moz-transition: box-shadow 150ms ease-out, bottom 0.2s ease;
    -o-transition: box-shadow 150ms ease-out, bottom 0.2s ease;
    :hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
    :hover .premium-subname-css {
      display: none;
    }
    :hover .premium-button-css {
      display: block;
    }
  }
  .premium-name-container-css {
    margin: 0px 10%;
  }
  .premium-name-css {
    margin-top: 7px;
    text-overflow: ellipsis;
    width: auto;
    font-size: 14px;
  }
  .premium-subname-css {
    margin-top: 6px;
    margin-bottom: 7px;
    font-size: 13px;
    color: #9e9e9e;
    text-transform: capitalize;
    text-overflow: ellipsis;
    width: auto;
    float: left;
  }
  .premium-button-css {
    margin-top: 6px;
    margin-bottom: 7px;
    font-size: 14px;
    font-weight: bolder;
    width: auto;
    float: left;
    display: none;
  }
  ${
    "" /* .premium-main:hover .premium-button-css{
    display: block;
} */
  }
  .premium-all-container {
    display: flex;
  }
  .premium-all {
    width: 49.2%;
    height: 68px;
    line-height: 68px;
    background-color: #fff;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    cursor: pointer;
    bottom: 0;
    margin: 50px 10px;
    :hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
  }
  @media only screen and (min-width: 770px) and (max-width: 1200px) {
    .premium-name-css {
      font-size: 12px;
      white-space: nowrap;
    }
    .premium-subname-css {
      font-size: 11px;
      text-overflow: none;
      white-space: nowrap;
    }
    .premium-button-css {
      font-size: 12px;
    }
    .premium-all {
      font-size: 12px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 770px) {
    .premium-name-css {
      font-size: 12px;
      width: auto;
      white-space: nowrap;
    }
    .premium-subname-css {
      font-size: 11px;
      width: auto;
    }
    .premium-button-css {
      font-size: 12px;
    }
    .premium-all {
      font-size: 12px;
    }
  }
`;
