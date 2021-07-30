import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { ValuesOfCorrectTypeRule } from "graphql";
import router from "next/router";
import React, { useState } from "react";
import InputFiled from "../components/InputFiled";
import Wrapper from "../components/Wrapper";
import { useForgotPasswordMutation } from "../generated/graphql";


export interface ForgotPasswordProps {}
 
const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
    
    const [, ForgotPassword] = useForgotPasswordMutation();
    const [state, setState] = useState(false);
    return ( 
        <>
        <Wrapper varient="small">
        <Formik initialValues={{email: ""}}
            onSubmit={ async (values, {setErrors})=> {
                const response = await ForgotPassword(values)
                if(response.data.forgotPassword === true){
                    setState(true);
                }
                else{
                    setState(false);
                    setErrors({"email": "invalid email"})
                }
            }}
            
        >
           { ({ isSubmitting }) => (
                <Form>
                       <InputFiled 
                        name="email" 
                        placeholder="email" 
                        label="Email"
                        type="email"
                     />
                        
                     <Button mt={4} type="submit" colorScheme="teal" isLoading={isSubmitting} >Forgot Password</Button>                  
                </Form>
                 
            )}
        </Formik>
        </Wrapper>

        <Box mt="10" align="center" color="red"> {state && <div>Reset password link is sent to your email!!</div>} </Box>
        </>
     );
}
 
export default ForgotPassword;