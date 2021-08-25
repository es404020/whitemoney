import React from "react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Navitem } from "./components/navitem";
import {
  MdCheckCircle,
  MdDashboard,
 
  MdAccountBalanceWallet,
  MdAttachMoney,
  MdPersonPin,
//   BsFillBellFill,
  MdFeedback,
} from "react-icons/md";
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
export const Sidenav = () => {
  return (
    <Flex
      pos="fixed"
      left="0px"
      top="0px"
      h="100vh"
      zIndex="2"
      bg="#F9F9F9"
      boxShadow="md"
      width="14%"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDir="column" minW="70%" width="14%" height="50%" justifyContent="space-between" alignItems="start" as="nav">
        <Box my={10} alignSelf="stretch">
          <Text>ODOGUN</Text>
        </Box>
        <Grid width="80%" mb={5} templateColumns="repeat(2,2fr)" gap="8">
          <Navitem
            title="Dashboard"
            icon={MdDashboard}
            active={true}
            show={false}
          />
          <Navitem
            title="Wallet"
            icon={MdAccountBalanceWallet}
            active={false}
            show={false}
          />
          <Navitem
            title="Transaction"
            icon={MdAttachMoney}
            active={false}
            show={false}
          />
          <Navitem
            title="Notification"
            icon={MdPersonPin}
            active={false}
            show={false}
          />
          <Navitem
            title="Messages"
            icon={MdFeedback}
            active={false}
            show={false}
          />

          <Navitem
            title="OGT"
            icon={MdCheckCircle}
            active={false}
            show={false}
          />
        </Grid>
      
        <Flex
          mt="auto"
          flexGrow={1}
          alignSelf="flex-start"
          display="flex"
          minW="100%"
          minHeight="100%"
          direction="column-reverse"

         
        >
            
          <Grid width="75%" templateColumns="repeat(2,2fr)" gap="8">
            <Navitem
              title="Settings"
              icon={MdFeedback}
              active={false}
              show={false}
            />

            <Navitem
              title="Accout"
              icon={MdPersonPin}
              active={false}
              show={false}
            />
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};
