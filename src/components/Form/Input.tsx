import { FormControl, FormErrorMessage, FormLabel, Input as ChackaInput, InputProps as ChackraInputProps } from "@chakra-ui/react";
import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form'

interface InputProps extends ChackraInputProps{ 
    name: string
    error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({ name, error=null,...rest }, ref) => {
    return(
        <FormControl isInvalid={!!error}>
            
            <ChackaInput 
              name={name}
              id={name}
              outline={0}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
              {...rest}
              ref={ref}
            />
            {error && <FormErrorMessage>
              {error.message}
            </FormErrorMessage>}
          </FormControl>
    )
}

const Input = forwardRef(InputBase)

export default Input