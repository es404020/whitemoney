import React from "react";
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
import { SearchIcon } from "@chakra-ui/icons";
import { BiBitcoin } from "react-icons/bi";
import {ImCoinYen} from "react-icons/im";
import {FaViacoin,FaEthereum} from "react-icons/fa";
import {SiLitecoin} from "react-icons/si";
import CurrencyCards from "./components/cards";
function Main() {
    return (
        <Flex
            minWidth="50%"
            flex={10}
            bg="white"
            marginLeft="14%"
            px="3%"
            py="2%"
            pb="75px"
            flexDir="column"
            overflowX="hidden"
            overflowY="auto"
            style={
                {
                    // border: bgcolor,
                    // border: "1px solid #E1E3E6",
                }
            }
            css={{
                "&::-webkit-scrollbar": {
                    width: "0",
                },
                "&::-webkit-scrollbar-track": {
                    width: "0",
                },
                "&::-webkit-scrollbar-thumb": {
                    borderRadius: "24px",
                },
            }}
        >
            <Box mb={20}>
                <InputGroup>
                    <Input
                        border="transparent"
                        bg="#F3F3F9"
                        placeholder="Search for product"
                        minW="auto"
                        px="5"
                        h="20px"
                        py="7"
                        borderRadius="24px"
                    />
                    <InputLeftElement py="7" px="5">
                        <SearchIcon color="#74788D" />
                    </InputLeftElement>
                </InputGroup>
            </Box>

            <Flex width="30%" fontSize="4xl" mb={20}>
                <Text fontWeight="bold">Hi,</Text>
                <Text fontWeight="light">Mikey</Text>{" "}
                <Circle size="30px" bg="#F8896A" color="white">
                    <Box as="span" fontWeight="bold" fontSize="md">
                        23
                    </Box>
                </Circle>
            </Flex>

            <Grid templateColumns="repeat(4,2fr)" gap="6" >


                

               <CurrencyCards bg="#FDECD4" icon={FaEthereum} name="Etheruim" text1="1.22222983883" text2="11,99.23 USD" />
               <CurrencyCards bg="#FCE4F8" icon={ImCoinYen} name="Yencoin"  text1="0.22222983883" text2="11,99.23 USD" />

               <CurrencyCards bg="#B4E0E8" icon={FaViacoin} name="Litecoin" text1="0.9973683883" text2="11,99.23 USD" />

               <CurrencyCards bg="#ECEEF9" icon={SiLitecoin} name="Moyocoin" text1="0.4345623883" text2="11,99.23 USD" />

             


            </Grid>

        </Flex>
    );
}

export default Main;
