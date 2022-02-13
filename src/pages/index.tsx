import { Flex, Button, Stack} from '@chakra-ui/react'
import Input from '../components/Form/Input'

export default function SignIn() {
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
      >
        <Stack spacing="4" >
            
            <Input type="email" name="email" placeholder="Email" />

            <Input type="password" name="password" placeholder="Senha" />       

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