import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Register } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";
import logo from "../Resources/1.png"

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
//useState
  const [userip, setuserIp] = useState({
    name: "",
    email: "",
    password: "",
  });
//handel Change
  const handelChange = (e) => {
    const { name, value } = e.target;
    setuserIp({ ...userip, [name]: value });
  };
//redux state
  const { loading, succ, err } = useSelector((store) => {
    return {
      loading: store.Authreducer.isLoading,
      succ: store.Authreducer.message,
      err: store.Authreducer.error,
    };
  });
  const navigate = useNavigate();
 //useEffect
  useEffect(() => {
    if (succ) {
      navigate("/login");
    }
    if (err) {
      alert(err);
    }
  }, [succ, err]);

  console.log(succ,"print succ")

  const handelRegister = () => {
    const payload = userip;

    dispatch(Register(payload));
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
        <Image borderRadius={"10px"} src={logo} alt="logo"/>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    value={userip.name}
                    name="name"
                    onChange={handelChange}
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                value={userip.email}
                name="email"
                onChange={handelChange}
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  value={userip.password}
                  name="password"
                  onChange={handelChange}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                onClick={handelRegister}
                bg={"yellow.600"}
                color={"white"}
                _hover={{
                  bg: "yellow.800",
                }}
              >
                Register
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
