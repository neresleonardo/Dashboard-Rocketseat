import {
    Box,
    Button,
    Flex,
    Heading,
    Divider,
    VStack,
    SimpleGrid,
    HStack
  } from "@chakra-ui/react";
  import { Header } from "../../components/Header/header"
  import { Sidebar } from "../../components/Sidebar";
  import { Input } from "../../components/Form/Input";
  import Link from 'next/link'
  import * as yup from 'yup'
  import { yupResolver } from '@hookform/resolvers/yup'
  import { SubmitHandler, useForm } from "react-hook-form";
  import { useMutation } from "react-query";
  import { api } from "../../services/api";
  import { queryClient } from "../../services/queryClient";
  import { useRouter } from "next/router";
  
  
  type CreateUserFormData = {
    name: string
    email: string;
    password: string;
    password_confirmation: string
  }
  
  const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório").min(3),
    email: yup.string().required('E-mail Obrigatório').email('E-mail Inválido'),
    password: yup.string().required("Senha Obrigatória").min(6, 'Mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
  })
  
  export default function CreateUser() {
  
    const router = useRouter()
  
    const createUser = useMutation(async (user: CreateUserFormData) => {
  
      await api.post('users', {
        ...user,
        created_at: new Date()
      })
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      }
    })
  
    const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(createUserFormSchema) })
  
    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
      await createUser.mutateAsync(values)
      router.push('/users')
    }
  
    return (
      <Box>
        <Header />
  
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
  
          <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>
            <Heading size="lg" fontWeight="normal">
              Criar usuário
            </Heading>
  
            <Divider my="6" borderColor="gray.700" />
  
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input name="name" placeholder="name" {...register('name')} error={formState.errors.name}></Input>
                <Input name="email" placeholder="email" type="email"  {...register('email')} error={formState.errors.email}></Input>
              </SimpleGrid>
  
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input name="password" placeholder="Password"  type="password" {...register('password')} error={formState.errors.password} />
                <Input
                  name="password_confirmation"
                  type="password"
                  placeholder="Confirmação da senha"
                  {...register('password_confirmation')} error={formState.errors.password_confirmation}
                ></Input>
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button type="submit" colorScheme="pink">Salvar</Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    );
  }