import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { InputHTMLAttributes } from "react";

type InputFiledProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
};


export const InputFiled: React.FC<InputFiledProps> = ({size: _, ...props}) => {
    const [field, {error}] = useField(props)  
    return (  
        <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
        <Input {...field} {...props} id={field.name}/>
        { error && <FormErrorMessage>{ error }</FormErrorMessage> }
      </FormControl>
     );
}
 
export default InputFiled;