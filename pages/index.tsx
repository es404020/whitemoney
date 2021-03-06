import type { NextPage } from "next";
import {Sidenav} from "../@component/SideNav/sidenav";
import Main from "../@component/Main/main";
import Mine from "../@component/Main/mine"
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
    <Box 
    
    
  >
      <Flex
        w="100%"
        flexDirection="column"
        bg="white"
        position="relative"
        display={["none", "none", "none", "block", "block"]
        
      
      }

    
      >
<Flex  >
<Sidenav />


<Main />
<Mine />
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
    </Box>
  );
};

export default Home;
