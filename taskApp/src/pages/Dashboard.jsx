import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData();
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id}  borderTop="8px" borderColor="#7FDBCA">
            <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                    <Text>AV</Text>
                </Box>

                <Box>
                  <Heading as="h2" size="sm">{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody>
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor="gray.600"/>
            <CardFooter>
              <HStack>
                  <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                  <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};

// const BoxStyle = {
//   p: "10px",
//   bg: "purple.400",
//   m: "10px",
//   color: "white",
//   textAlign: "center",
//   filter: "blur(2px)",
//   ':hover':{
//     color:"black",
//     bg: "blue"
//   }
// <Container as="section" maxW="4xl" py="20px">

//   <Heading my="30px" p="10px">Chakra UI</Heading>
//   <Text marginLeft="30px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, unde.</Text>
//   <Text ml="30px" color="#7FDBCA" fontWeight="bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</Text>

//   <Box my="30px" p="20px" bg="orange.300">
//     <Text>This is a box</Text>
//   </Box>

//   <Box sx={BoxStyle}>Hello</Box>
// </Container>
// <Box bg="white" h="200px" border="1px solid">
//  <Text color={{base:"green", md:"yellow", lg:"blue"}}>Hello</Text>
// </Box>
// <Box bg="white" h="200px" border="1px solid"></Box>
// <Box bg="white" h="200px" border="1px solid"></Box>
// <Box bg="white" h="200px" border="1px solid"></Box>

// <Box bg="white" h="200px" border="1px solid"></Box>
// <Box bg="white" h="200px" border="1px solid"></Box>
// <Box bg="white" h="200px" border="1px solid"></Box>
// <Box bg="white" h="200px" border="1px solid"></Box>

// <Box bg="white" h="200px" border="1px solid"></Box>
// <Box bg="white" h="200px" border="1px solid"></Box>
// <Box bg="white" h="200px" border="1px solid"></Box>
// <Box bg="white" h="200px" border="1px solid"></Box>
