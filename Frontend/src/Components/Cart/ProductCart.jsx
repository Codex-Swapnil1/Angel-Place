import { Box, Button, Divider, Image } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BsSuitHeart, BsTrash } from 'react-icons/bs';
import styled from 'styled-components';

const ProductCart = ({cartdata}) => {
  // let sum = 0;
  let discount = 0;
  // cartdata && cartdata.forEach(element => {
  //   sum+= element.mrp * element.qty;
  //   discount+= element.mrp- element.price
  // });
  const [sum, setSum] = useState(0)

  const getTotal = () =>{
    const total = cartdata.reduce((prev, item) => {
        return prev + (item.mrp * item.qty)
    },0)

    // setSum(sum)
    return total
}




let x = getTotal();
console.log(x)


  return (
    <ProductWrapper>
    {cartdata?.map((data)=>{
      return (
        <Box classname="wrapperdata" key={data._id}>
    <Box className='main-container'>
      <Box className='sub-container'>
        <Box>
          <Image className='img-css' src={data.img} alt="cart-image" />
        </Box>
        <Box>
          <h1>{data.title}</h1>
         <p >Size: <span style={{color:'black'}}>{data.clr_size}</span></p>
         <Box style={{color:"gray",fontSize:"13px"}}>Dispatch Within: 24 Hours</Box>
        </Box>
      </Box>
      <Box className='right-side'>
        <Box> ₹ {data.price} </Box>
        <p style={{color:"gray"}}>MRP ₹ <span style={{textDecoration:"line-through"}}>{data.mrp}</span> <span style={{color:"tomato"}}>{data.discount}</span></p>
        <p style={{color:"gray",fontSize:"12px"}}>MRP Includes all taxes</p>
        <Button>-</Button>{data.qty}<Button>+</Button>
      </Box>
    </Box>
    <Box className="bottom-side">
      <Box display={"flex"} gap="4px" borderRightColor={"blue.200"}><BsTrash style={{marginTop:"4px"}}/> REMOVE</Box>
      <Box display={"flex"} gap="4px"> <BsSuitHeart style={{marginTop:"4px"}} /> MOVE TO SHORTLIST</Box>
    </Box>
    </Box>
      )
    })}
    <Box>
    <Box className='payment-container'>
    <Box fontWeight={"bold"}>Payment Information</Box>
    <Box className='payment-css'><p>Value of Product(s)</p>  <p>₹ {x}</p></Box>
    <Box className='payment-css'><p style={{color:"green"}}>Discount(-) </p>  <p style={{color:"green"}}>₹ {discount}</p></Box>
    <Box className='payment-css'><p>Estimated GST (+)  </p>  <p style={{color:"red"}}>₹ 162.26</p></Box>
    <Box className='payment-css'><p style={{color:"green"}}>Shipping (+) </p>  <p style={{color:"green"}}>FREE</p></Box>
    <Box className='payment-css'><p>Sub Total </p>  <p>₹ 1951.51</p></Box>
    <Divider border={"dashed gray"}/>
    <Box className='payment-css1'><p>Sub Total </p>  <p>₹ 1951.51</p></Box>
    <Divider border={"dashed gray"}/>
    <Box className='payment-css2'><p>Final Payment </p>  <p>₹ 1951.51</p></Box>
    </Box>
    </Box>

    </ProductWrapper>
  )
}

export default ProductCart;

const ProductWrapper=styled.div`
padding: 20px;
.wrapperdata{
  padding: 20px 0px;
  margin: 20px 0px;
}
.payment-css1{
padding: 10px 5px;
display: flex;
max-width: 600px;
justify-content: space-between;
margin: 5px 0px;
}
.payment-css2{
padding: 10px 5px;
display: flex;
max-width: 600px;
justify-content: space-between;
margin: 5px 0px;
}
.payment-container{
  padding: 20px 10px;
  border: 1px solid gray;
  margin: 20px 0px;
  max-width: 700px;
}
.payment-css{
display: flex;
max-width: 600px;
color: gray;
justify-content: space-between;
margin: 5px 0px;
}
.right-side p{
  margin: 5px 0px;
}
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
.img-css{
  width: 150px;
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
  .img-css{
    min-width:120px;
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
  ..payment-css{
    font-size: 12px;
  }
  .payment-container{
    font-size: 12px;
  }
}
`