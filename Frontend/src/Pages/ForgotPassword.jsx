import React from "react";
import "../CSS/Login.css";
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

const ForgotPassword = () => {
  return (
    <Container mt={"40px"} border={""} p={"10"}>
      <Text textAlign={"center"} fontSize={"30"} fontWeight="3xl">
        Forgot Password
      </Text>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Email" />
        
        <Button
          w={"100%"}
          textColor={"white"}
          colorScheme="yellow"
          variant="solid"
          mt={"3"}
          type="submit"
        >
          Send Link
        </Button>
      </FormControl>
    </Container>
  );
};

export default ForgotPassword;
