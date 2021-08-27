import React from "react";
import { FaViacoin, FaEthereum, FaShieldAlt } from "react-icons/fa";
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
    AvatarGroup,
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
const Mine = () => {
    return (
        <Flex
            pos="fixed"
            right="0px"
            top="0px"
            h="100vh"
            flexGrow={1}
           
            width="20%"
            flexDir="column"
            alignItems="start"
            bg="#F9FAFE"
            p="2%"
        >
            <Flex
                direction="row"
                width="100%"
                alignItems="center"
                mb={10}
                justifyContent="space-between"
            >
                <Text color="rgb(114,118,122)" fontWeight="semibold">
                    Quit
                </Text>
                <Text color="rgb(114,118,122)" fontWeight="semibold">
                    Personal
                </Text>

                <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            </Flex>
            <Flex
                direction="row"
                width="100%"
                alignItems="center"
                mb={5}
                justifyContent="space-between"
            >
                <Text fontSize="x-large" fontWeight="bold">
                    Payment{" "}
                </Text>
                <Button bg="white" boxShadow="md" color="black">
                    Clear
                </Button>
            </Flex>

            <Grid
                width="100%"
                templateColumns="repeat(1,2fr)"
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
                <Flex
                    bg="white"
                    height="110px"
                    borderRadius="6px"
                    direction="column"
                    justifyContent="space-between"
                    boxShadow="md"
                    p={3}
                >
                    <Flex
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Flex
                            width="50%"
                            dir="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <Circle size="30px" bg="tomato" color="white">
                                <FaEthereum />
                            </Circle>
                            <Text fontSize="xs">Received LTC</Text>
                        </Flex>

                        <Flex>
                            <Text fontWeight="bold" fontSize="sm">+15.0 USD</Text>
                        </Flex>
                    </Flex>

                    <Flex direction="row" justifyContent="space-between">
                        <Text fontSize="sm">19/2/3 00:34:45</Text>

                        <AvatarGroup size="sm" max={2}>
                            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                            <Avatar
                                name="Prosper Otemuyiwa"
                                src="https://bit.ly/prosper-baba"
                            />
                            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                        </AvatarGroup>
                    </Flex>
                </Flex>
                <Flex
                    bg="white"
                    height="110px"
                    borderRadius="6px"
                    direction="column"
                    justifyContent="space-between"
                    boxShadow="lg"
                    p={3}
                >
                    <Flex
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Flex
                            width="50%"
                            dir="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <Circle size="30px"  bg="#63DCCA" color="white">
                                <FaViacoin />
                            </Circle>
                            <Text fontSize="xs">Received LTC</Text>
                        </Flex>

                        <Flex>
                            <Text fontWeight="bold" fontSize="sm">+15.0 USD</Text>
                        </Flex>
                    </Flex>

                    <Flex direction="row" justifyContent="space-between">
                        <Text fontSize="sm">19/2/3 00:34:45</Text>

                        <AvatarGroup size="sm" max={2}>
                            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                            <Avatar
                                name="Prosper Otemuyiwa"
                                src="https://bit.ly/prosper-baba"
                            />
                            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                        </AvatarGroup>
                    </Flex>
                </Flex>
            </Grid>
        </Flex>
    );
};

export default Mine;
