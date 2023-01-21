import React from "react";
import { Link } from "react-router-dom";
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

const ResetPassword = () => {
  return (
    <Container mt={"40px"} border={""} p={"10"}>
      <Text textAlign={"center"} fontSize={"30"} fontWeight="3xl">
        Reset Password
      </Text>
      <FormControl>
        <FormLabel>New Password</FormLabel>
        <Input type="password" placeholder="New Password" />
        <FormLabel>Confirm Password</FormLabel>
        <Input type="password" placeholder="Confirm Password" />
        <Button
          w={"100%"}
          textColor={"white"}
          colorScheme="yellow"
          variant="solid"
          mt={"3"}
          type="submit"
        >
          Reset Password
        </Button>
      </FormControl>
    </Container>
  );
};

export default ResetPassword;
