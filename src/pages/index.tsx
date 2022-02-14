import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail Obrigatório").email('E-mail inválido'),
  password: yup.string().required("Senha Obrigatória")
})

export default function SignIn() {

  const { register, handleSubmit, formState } = 
  useForm({ resolver: yupResolver(signInFormSchema) });

  const handleSignIn: SubmitHandler<FieldValues> = async (values) => {
    await new Promise(resolver => setTimeout(resolver, 2000))
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email" 
            {...register('email')} 
            placeholder="Email"
            error={formState.errors.email}
             />

          <Input 
            type="password" 
            {...register('password')} 
            placeholder="Senha"
            error={formState.errors.password} />
        </Stack>

        <Button 
        type="submit" 
        mt="6" 
        colorScheme="pink" 
        size="lg"
        isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}