import { Box,  Button,  Divider,  Flex, Heading, HStack, SimpleGrid, VStack, } from "@chakra-ui/react";
import Link from "next/link";
import {Input} from "../../components/Form/Input";
import * as yup from 'yup'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Header } from "../../components/Header/header";
import { Sidebar } from "../../components/Sidebar";

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

    const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(createUserFormSchema) })

    const handleCreateUser: SubmitHandler<FieldValues> = async (values) => {
        await new Promise(resolver => setTimeout(resolver, 2000))
        console.log(values);
        
      }
    

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box 
                 as="form"
                 flex="1" 
                 borderRadius={8} 
                 bg="gray.800" 
                 p={["6","8"]}
                 onSubmit={handleSubmit(handleCreateUser)}>

                    <Heading size="lg" fontWeight="normal">Criar Usuários</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">

                            <Input 
                            placeholder="Nome Completo" 
                            {...register("name")}
                            error={formState.errors.name} />

                            <Input 
                            type="email" 
                            placeholder="E-mail" 
                            {...register("email")}
                            error={formState.errors.email} />

                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} width="100%">

                            <Input 
                            type="password" 
                            placeholder="Senha"
                            {...register("password")}
                            error={formState.errors.password}  />

                            <Input 
                            type="password" 
                            placeholder="Confirmar senha"
                            {...register("password_confirmation")}
                            error={formState.errors.password_confirmation} />
                        </SimpleGrid>

                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/dashboard" passHref>
                            <Button colorScheme="whiteAlpha">Cancelar</Button>   
                            </Link>
                            <Button isLoading={formState.isSubmitting} type="submit" colorScheme="pink">Salvar</Button>  
                        </HStack>
                    </Flex>
                </Box>

            </Flex>
        </Box>
    )
}