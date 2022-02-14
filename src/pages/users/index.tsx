import {
    Box,
    Flex,
    Heading,
    Button,
    Icon,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Checkbox,
    Tbody,
    Text,
    useBreakpointValue,
    Spinner,
    Link
  } from "@chakra-ui/react";
  import { RiAddLine, RiPencilLine } from "react-icons/ri";


  import { Header } from "../../components/Header/header";
  import { Paginator } from '../../components/Pagination';
  import { Sidebar } from "../../components/Sidebar";
  import NextLink from 'next/link'
  import { useUser } from "../../services/hooks/useUsers";
  import { useState } from "react";
  import { queryClient } from "../../services/queryClient";
  import { api } from "../../services/api";
  
  
  type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string
  }
  
  export default function UserList(users: User[]) {
  
    const [currentPage, setCurrentPage] = useState(1)
    const { data, isLoading, isFetching, error } = useUser(currentPage)
  
    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
    })
  
  
  
    async function handlePrefetchUser(userId: string) {
      await queryClient.prefetchQuery(['user', userId], async () => {
        const response = await api.get(`users/${userId}`)
  
        return response.data
      }, {
        staleTime: 1000 * 60 * 10 // 10 minutos
      })
    }
  
    return (
      <Box>
        <Header />
  
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
  
          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
                {!isLoading && isFetching && <Spinner size='sm' color="gray.500" />}
              </Heading>
              <NextLink href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Button>
              </NextLink>
            </Flex>
  
            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">Falha ao carregar os dados</Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={["2", "4", "6"]} color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de cadastro</Th>}
                      <Th width="6"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.users.map(user => (
                      <Tr key={user.id}>
                        <Td px={["2", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            leftIcon={<Icon as={RiPencilLine} />}
                          >
                            Editar
                          </Button>
                        </Td>
                      </Tr>
                    ))}
  
                  </Tbody>
                </Table>
                <Paginator totalCountOfRegisters={data.totalCount} currentePage={currentPage} onPageChange={setCurrentPage} />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    );
  }