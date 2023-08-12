import {
  Flex,
  Box,
  Heading,
  Spacer,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px">
      <Heading as="h1">Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <Box bg="gray.200" p="10px" color="Black">
          M
        </Box>
        {/* <Text>mohitchoudhary1054gmail.com</Text> */}
        <Button bg="#7FDBCA" color="black">Logout</Button>
      </HStack>
    </Flex>
  );
}

// <Flex bg="gray.200" justify="space-between" wrap="wrap">
//     <Box w="150px" h="50px" bg="red">1</Box>
//     <Box w="150px" h="50px" bg="blue">2</Box>
//     <Box w="150px" h="50px" bg="green" flexGrow="1">3</Box>
//     <Box w="150px" h="50px" bg="yellow" flexGrow="2">4</Box>
// </Flex>
