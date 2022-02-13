import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProviderProps {
    showProviderData?: boolean;
}

export function Profile({showProviderData= true}: ProviderProps ){
    return(
        <Flex align="center">
               { showProviderData && (
                    <Box mr="4" textAlign="right"> 
                    <Text>Leonardo borges</Text>
                    <Text color="gray.300" fontSize="small">leoanrdo.borges.neres@gmail.com</Text>
                </Box>
               ) }

                <Avatar size="md" name="Leonardo" src="https://github.com/neresleonardo.png"></Avatar>
        </Flex>
    )
}