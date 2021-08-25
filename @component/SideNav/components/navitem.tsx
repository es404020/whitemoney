
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
    createIcon ,
 
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
    IconButton,
  } from "@chakra-ui/react";



export function Navitem ({ title='', icon, active=false, show = true }:any) {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Square size="35px" bg={active ? '#51459F' : "#ECEEF9"}    borderRadius="10px">
              {/* <PhoneIcon /> */}
              <Icon color={active ? 'white' : "#565656"} as={icon} w={4} h={4} />
            </Square>
            <Text mt={2} fontSize="xx-small">{title}</Text>
          </Box>
    )
}
