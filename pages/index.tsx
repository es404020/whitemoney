import type { NextPage } from "next";
import {Sidenav} from "../@component/SideNav/sidenav";
import Main from "../@component/Main/main";
import {
  Flex,
  Text,
  Image,
  Spacer,
  useColorModeValue,
  WrapItem,
  InputRightElement,
  Heading,
  Progress,
  Box,
  Button,
  List,
  ListItem,
  ListIcon,
  HStack,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  Grid,
  Select,
  Table,
  Circle,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Avatar,
  Square,
  position,
  Center,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Flex
        w="100%"
        flexDirection="column"
        bg="white"
        position="relative"
        display={["none", "none", "none", "block", "block"]}
      >
<Flex  >
<Sidenav />

<Main />
<Flex 
 pos="fixed"
 right="0px"
 top="0px"
 h="100vh"
     
   
      flexGrow={1}
      FlexShadow="md"
      width="20%"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
       bg="#F9FAFE" >
oke
</Flex>
</Flex>

       
       
      </Flex>
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        display={["block", "block", "block", "none", "none"]}
      >
        <Center height="80vh">
          Use on a Laptop mobile view coming soon 🙏
        </Center>
      </Flex>
    </>
  );
};

export default Home;
