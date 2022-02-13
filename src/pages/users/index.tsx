import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody,Text, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/header";
import { Pagination } from "../../components/Pagination/Pagination";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>

                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            colorScheme="pink"
                        >Criar novo</Button>

                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">

                                    <Checkbox colorScheme="pink" />

                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de Cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">

                                    <Checkbox colorScheme="pink" />

                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Leonardo Borges</Text>
                                        <Text fontWeight="sm" color="gray.300">leonardo.borges.neres@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>17 de Maio de 1998</Td>
                                <Td>
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    leftIcon={<Icon as={RiPencilLine}  fontSize="16" />}
                                    colorScheme="purple"
                                >Editar</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />

                </Box>

            </Flex>
        </Box>
    )
}