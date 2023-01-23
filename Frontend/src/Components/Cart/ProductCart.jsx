import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react'
import { BsSuitHeart, BsTrash } from 'react-icons/bs';
import styled from 'styled-components';

const ProductCart = () => {
  
  
  
  
  return (
    <ProductWrapper>
    <Box className='main-container'>
      <Box className='sub-container'>
        <Box>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/products/thumb/12692896a.webp" alt="cart-image" />
        </Box>
        <Box>
          <h1>Spunkies Puzzle Abstract Print Sweatshirt- Red</h1>
         <p >Size: <span style={{color:'black'}}>"8-9Y"</span></p>
         <Box style={{color:"gray",fontSize:"13px"}}>Dispatch Within: 24 Hours</Box>
        </Box>
      </Box>
      <Box className='right-side'>
        <Box> ₹ 710.21 </Box>
        <p style={{color:"gray"}}>MRP ₹ <span style={{textDecoration:"lineThrough"}}>999</span> <span style={{color:"tomato"}}>25% OFF</span></p>
        <p style={{color:"gray",fontSize:"12px"}}>MRP Includes all taxes</p>
        <Button>-</Button> 1 <Button>+</Button>
      </Box>
    </Box>
    <Box className="bottom-side">
      <Box display={"flex"} gap="4px" borderRightColor={"blue.200"}><BsTrash style={{marginTop:"4px"}}/> REMOVE</Box>
      <Box display={"flex"} gap="4px"> <BsSuitHeart style={{marginTop:"4px"}} /> MOVE TO SHORTLIST</Box>
    </Box>

    </ProductWrapper>
  )
}

export default ProductCart;

const ProductWrapper=styled.div`
padding: 20px;
.sub-container{
  display: flex;
  padding-bottom: 10px;
  gap: 20px;
  border-bottom: 2px solid #f2f2f2;
}
.sub-container p{
 color: gray;
 margin: 10px 0px;
}
.main-container{
  display: flex;
  gap: 40px;
}
.right-side{
  border-left: 2px solid #f2f2f2;
  padding-left: 10px;
}
.bottom-side{
  display: flex;
  gap: 40px;
}
.bottom-side div{
  cursor: pointer;
}

@media only screen and (min-width: 768px) and (max-width: 1024px){
  .main-container{
    display: block;
  }

}
@media only screen and (min-width: 320px) and (max-width: 768px){
  .main-container{
    display: block;
  }
  .sub-container{
    font-size: 13px;
  }
  .right-side{
    font-size: 13px;
  }
  .bottom-side{
    font-size: 13px;
  }
}
`