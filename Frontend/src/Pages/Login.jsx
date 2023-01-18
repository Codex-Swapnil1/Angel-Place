import React from 'react'
import "../CSS/Login.css"
// import CustomeInput from '../Components/CustomeInput'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Login = () => { 
  return (
    <Container mt={"40px"} border={""} p={"10"}>
      <Text textAlign={"center"} fontSize={"50"} fontWeight="3xl">
        Login
      </Text>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Email" />
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Password" />
        
        <Link to="forgot-password" style={{color:'blue'}}>Forgot Password?</Link>

        <Button
          w={"100%"}
          textColor={"white"}
          colorScheme="yellow"
          variant="solid"
          mt={"3"}
          type="submit"
        >
          Login
        </Button>
      </FormControl>
    </Container>
  );
}

export default Login