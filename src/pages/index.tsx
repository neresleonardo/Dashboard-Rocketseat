import { Flex, Button, Stack} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../components/Form/Input'

type SignInFormData = {
  email: string,
  password: string;
}

export default function SignIn() {

  const { register, handleSubmit } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
    
  }
 
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex as="form"
        w='100%'
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSubmit)}
      >
        <Stack spacing="4" >
            
            <Input 
            type="email" 
            {...register('email')}
            placeholder="Email"

             />

            <Input 
            type="password" 
            {...register('password')}
            placeholder="Senha"
             />       

        </Stack>

        <Button 
        
            type="submit" 
            mt="6" 
            colorScheme="pink">
              
          Entrar
        </Button>

      </Flex>

    </Flex>
  )
}