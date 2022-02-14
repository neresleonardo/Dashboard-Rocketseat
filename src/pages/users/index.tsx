import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody,Text, Td, Th, Thead, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/header";
import { Pagination } from '../../components/Pagination';
import { Sidebar } from "../../components/Sidebar";
import { useQuery } from "react-query";

export default function UserList() {

    const { data, isLoading, error } = useQuery('users', async () => {
       const response= await fetch('http://localhost:3000/api/users')
        const data = await response.json()
        .then(data => console.log(data))

        return data;
    })
    

    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true,
    })

    useEffect(() => {
       
    }, [])

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4","6"]}>
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>

                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>

                        <Link href="/users/create" passHref >
                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            colorScheme="pink"
                        >Criar novo</Button>
                        </Link>

                    </Flex>

                  { isLoading ? (
                      <Flex justify="center">
                          <Spinner />
                      </Flex>
                       
                  ): error ? (
                    <Flex justify="center">
                        <Text>Error</Text>
                     </Flex>
                  ) : (
                    <>
                     <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.300" width="8">

                                    <Checkbox colorScheme="pink" />

                                </Th>
                                <Th>Usuário</Th>
                           { isWideVersion &&  <Th>Data de Cadastro</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                           {data.users.map(user => {
                               return(
                                <Tr key={user.id}>
                                <Td px={["4","4","6"]}>

                                    <Checkbox colorScheme="pink" />

                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Leonardo Borges</Text>
                                        <Text fontWeight="sm" color="gray.300">leonardo.borges.neres@gmail.com</Text>
                                    </Box>
                                </Td>
                            { isWideVersion &&   <Td>17 de Maio de 1998</Td>}
                                <Td>
                             {  isWideVersion &&  <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    leftIcon={<Icon as={RiPencilLine}  fontSize="16" />}
                                    colorScheme="purple"
                                >Editar</Button>}
                                </Td>
                            </Tr>
                               )
                           })}
                        </Tbody>
                    </Table>

                    
                    </>
                  )}

                </Box>

            </Flex>
        </Box>
    );
}