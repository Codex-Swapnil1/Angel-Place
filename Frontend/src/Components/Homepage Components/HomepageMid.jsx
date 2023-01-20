import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import { premium } from '../../Resources/homepagedata';
const HomepageMid = () => {
  return (
    <MainContainerWrapper>
        <Box className="premium-main">
        <h1 style={{fontSize:"24px",textAlign:"center",fontWeight:"450",marginBottom:"8px"}}>PREMIUM BOUTIQUES</h1>
        <SimpleGrid columns={[2, null, 3]} spacing='20px'>
        {
            premium.map((data,index)=>{
                return (
                    <Box key ={index+1} className='premium-card'>
                <Box>
                    <Image borderTopRadius={"5px"} src={data.image} alt={data.name}/>
                </Box>
                <Box className='premium-name-container-css'>
                    <h2 className="premium-name-css">{data.name}</h2>
                    <p className="premium-subname-css">{data.subname}</p>
                   <Box className='premium-button-css'><button>SHOP NOW</button></Box>
                </Box>
            </Box>
                )
            })
        }
        </SimpleGrid>
        <Box className='premium-all-container' >
            <Box className='premium-all'>View All Boutiques </Box>
            <Box className='premium-all'>View All Premium Brands </Box>
        </Box>
        </Box>


    </MainContainerWrapper>
  )
}

export default HomepageMid;

const MainContainerWrapper =styled.div`
.premium-main{
    margin-top:8px;
    background-color:#eeeeee;
    padding: 31px 9% 26px;
}
.premium-card{
    max-width:387px;
    ${'' /* background-color:#e7e8a7; */}
    border-radius:5px;
    cursor:pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    :hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
    :hover .premium-subname-css{
        display: none;
    }
    :hover .premium-button-css{
        display: block;
    }
}
.premium-name-container-css{
margin: 0px 22px;
}
.premium-name-css{
    display: inline-block;
    margin-top: 7px;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 17px;
    font-size: 14px;
}
.premium-subname-css{
    margin-top: 6px;
    margin-bottom: 7px;
    font-size: 13px;
    color: #9e9e9e;
    text-transform: capitalize;
    text-overflow: ellipsis;
    width: 260px;
    float: left;
}
.premium-button-css{
    margin-top: 6px;
    margin-bottom: 7px;
    font-size: 14px;
    font-weight: bolder;
    width: 260px;
    float: left;
    display: none;
}
${'' /* .premium-main:hover .premium-button-css{
    display: block;
} */}
.premium-all-container{
    display: flex;
}
.premium-all{
    width: 49.2%;
    height: 68px;
    line-height: 68px;
    background-color: #fff;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    bottom: 0;
    margin: 50px 10px;
}
`