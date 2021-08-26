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
    Stack,
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
import { AddIcon, SearchIcon, SettingsIcon } from "@chakra-ui/icons";
import { BiBitcoin } from "react-icons/bi";
import { ImCoinYen } from "react-icons/im";
import { FaViacoin, FaEthereum,FaShieldAlt } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import {AiOutlineThunderbolt} from "react-icons/ai";
import CurrencyCards from "./components/cards";
function Main() {
    return (
        
        <Flex
        minHeight="0"
            minWidth="66%"
           
           
            bg="white"
            marginLeft="14%"
            marginRight="15%"
            px="3%"
            py="2%"
            pb="75px"
            direction="column"
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
                    background: "transparent"
                },
                "&::-webkit-scrollbar-track": {
                    width: "0",
                },
                "&::-webkit-scrollbar-thumb": {
                    borderRadius: "2px",
                    background: "#FF0000"
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

            <Grid
                templateColumns="repeat(4,2fr)"
                gap="6"
                overflowX="auto"
                mb={20}
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
                <CurrencyCards
                    bg="#FDECD4"
                    icon={FaEthereum}
                    name="Etheruim"
                    text1="1.22222983883"
                    text2="11,99.23 USD"
                />
                <CurrencyCards
                    bg="#FCE4F8"
                    icon={ImCoinYen}
                    name="Yencoin"
                    text1="0.22222983883"
                    text2="1,99.23 USD"
                />

                <CurrencyCards
                    bg="#B4E0E8"
                    icon={FaViacoin}
                    name="Litecoin"
                    text1="0.9973683883"
                    text2="17,99.23 USD"
                />

                <CurrencyCards
                    bg="#ECEEF9"
                    icon={SiLitecoin}
                    name="Moyocoin"
                    text1="0.4345623883"
                    text2="20,99.23 USD"
                />
            </Grid>

            <Flex direction="row"  mb={10} justifyContent="space-between">
                <Flex width="40%" direction="row" justifyContent="space-between">
                    <Flex direction="column">
                        <Text fontSize="x-large" fontWeight="extrabold">
                            Latest Activity
                        </Text>
                        <Text
                            fontSize="meduim"
                            color="rgb(114,118,122)"
                            fontWeight="semibold"
                        >
                            Update 12 min ago
                        </Text>
                    </Flex>

                    <Text
                        as="ins"
                        fontSize="meduim"
                        alignSelf="flex-end"
                        color="rgb(114,118,122)"
                        fontWeight="semibold"
                    >
                        edit
                    </Text>
                </Flex>

                <Flex direction="column-reverse">
                    <Stack direction="row" spacing={4}>
                        <Button bg="#F7F6F9" variant="solid">
                            <SettingsIcon h={4} w={4} color="#92949A" />
                        </Button>
                        <Button bg="#51459F" variant="solid">
                            <AddIcon h={4} w={4} color="white" />
                        </Button>
                    </Stack>
                </Flex>

                {/* <Flex></Flex> */}
            </Flex>

            <Flex width="full" direction="row" justifyContent="space-between" alignItems="center">
                <Flex>
                    <Square size="60px" borderRadius="10px" bg="#E7EEFA" color="white">
                    <FaShieldAlt size={24} color="#1951AB" />
                    </Square>
                </Flex>

                <Flex direction="column">

                    <Text fontSize="meduim" fontWeight="extrabold">Insurances</Text>
                    <Text fontSize="sm"
                        color="rgb(114,118,122)"
                        fontWeight="semibold">Property Courage</Text>

                </Flex>
                <Flex direction="column">

                    <Text fontSize="meduim" fontWeight="extrabold">LTC Wallet</Text>
                    <Text fontSize="sm"
                        color="rgb(114,118,122)"
                        fontWeight="semibold">Personal Account</Text>

                </Flex>
                <Flex direction="column">
                    <Text fontSize="meduim" fontWeight="extrabold">7,jun 21</Text>
                    <Text fontSize="sm"
                        color="rgb(114,118,122)"
                        fontWeight="semibold">Last Payment</Text>

                </Flex>
                <Flex direction="column">
                    <Text fontSize="meduim" fontWeight="extrabold">-10.24 LTC</Text>
                    <Text fontSize="sm"
                        color="rgb(114,118,122)"
                        fontWeight="semibold">Balance</Text>

                </Flex>
            </Flex>
            



             <Flex width="full" pt={5} direction="row" justifyContent="space-between" alignItems="center">
                <Flex>
                    <Square size="60px" borderRadius="10px" bg="#FFEFE9" color="white">
                        <AiOutlineThunderbolt size={24} color="#CE6E43" />
                    </Square>
                </Flex>

                <Flex direction="column">

                    <Text fontSize="meduim" fontWeight="extrabold">Insurances</Text>
                    <Text fontSize="sm"
                        color="rgb(114,118,122)"
                        fontWeight="semibold">Property Courage</Text>

                </Flex>
                <Flex direction="column">

                    <Text fontSize="meduim" fontWeight="extrabold">LTC Wallet</Text>
                    <Text fontSize="sm"
                        color="rgb(114,118,122)"
                        fontWeight="semibold">Personal Account</Text>

                </Flex>
                <Flex direction="column">
                    <Text fontSize="meduim" fontWeight="extrabold">7,jun 21</Text>
                    <Text fontSize="sm"
                        color="rgb(114,118,122)"
                        fontWeight="semibold">Last Payment</Text>

                </Flex>
                <Flex direction="column">
                    <Text fontSize="meduim" fontWeight="extrabold">-10.24 LTC</Text>
                    <Text fontSize="sm"
                        color="rgb(114,118,122)"
                        fontWeight="semibold">Balance</Text>

                </Flex>
            </Flex>

           
            
        </Flex>
    );
}

export default Main;
