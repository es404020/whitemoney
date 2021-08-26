import React from 'react'
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
import { BsThreeDotsVertical } from "react-icons/bs";
function CurrencyCards ({bg="",icon,text1="",text2="",name=""}:any) {
    return (
        <Flex direction="column" bg={bg} borderRadius="5px" justifyContent="space-evenly" alignItems="start" minHeight="300px" p={3}>
                    <Flex minW="100%" direction="row" justifyContent="space-between" >
                        <Text color="#413B6D" fontWeight="semibold">{name}</Text>
                        <BsThreeDotsVertical />
                    </Flex>

                    <Icon color="#FEFBF0" as={icon} boxSize={140} />

                 

                    <Text color="#413B6D" fontSize="md" fontWeight="bold" >{text1}</Text>


                    <Text color="#413B6D" fontSize="sm" fontWeight="semibold" >{text2}</Text>
                    <Flex >

                    </Flex>


                </Flex>
    )
}

export default CurrencyCards;
