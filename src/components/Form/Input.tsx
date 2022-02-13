import { Input as ChakraInput , FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
    name: string;
}

export default function Input({name, ...rest }:InputProps ) {
    return(
        <FormControl>

                <ChakraInput 

                id={name}
                {...rest}
                name={name}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                bgColor: 'gray.900'
                }}
                size="lg"
        
                />

        </FormControl>
    )
}