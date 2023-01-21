import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Login_handeler } from "../Redux/Auth/action";

export default function LoginCard() {
  
    const dispatch=useDispatch()
  
  
    const [userip, setuserIp] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;

    setuserIp({ ...userip, [name]: value });
  };
  
  const {loading,token}=useSelector((store)=>{
    return {loading:store.Authreducer.isLoading, token:store.Authreducer.token }
  })
  

const navigate=useNavigate()
  if(token=="token cant genrated"){
  <h1>errorr</h1>
  }
   if(token){
    localStorage.setItem("token",token)
 navigate('/')
  }

  


  const handelLogin = () => {
    dispatch(Login_handeler(userip))
    
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                value={userip.email}
                onChange={handelChange}
                type="email"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                value={userip.password}
                onChange={handelChange}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                onClick={handelLogin}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
