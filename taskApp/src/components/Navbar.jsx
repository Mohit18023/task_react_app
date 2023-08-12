import {
  Flex,
  Box,
  Heading,
  Spacer,
  Text,
  Button,
  HStack,
  useToast,
  Avatar,
  AvatarBadge
} from "@chakra-ui/react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { UnlockIcon } from '@chakra-ui/icons'

export default function Navbar() {
  const toast = useToast()
  const showToast = () =>{
    toast({
      title: "Logged Out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />
    });
  }
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
        <Avatar name="Mohit" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="#7fdbca" >
            <Text fontSize='xs'>5</Text>
          </AvatarBadge>
        </Avatar>
        <Button bg="#7FDBCA" color="black" onClick={showToast}>Logout</Button>
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
