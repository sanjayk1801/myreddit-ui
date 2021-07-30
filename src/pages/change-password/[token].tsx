import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage , GetStaticProps } from "next";
import router from "next/router";
import React, { useState } from "react";
import { Context } from "urql";
import InputFiled from "../../components/InputFiled";
import Wrapper from "../../components/Wrapper";
import { useChangePasswordMutation, useForgotPasswordMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";


export interface ChangePasswordProps {
   token: string; 
}
 
const ChangePassword: NextPage<ChangePasswordProps> = ({ token }) => {
    
    const [, ChangePassword] = useChangePasswordMutation();
    const [tokenError, setTokenError] = useState('');
    return ( 
        <>
        <Wrapper varient="small">
        <Formik initialValues={{newPassword: "", token: token}}
            onSubmit={ async (values, {setErrors})=> {
                const response = await ChangePassword(values)
                if(response.data?.changePassword.errors){
                    const errors = toErrorMap(response.data.changePassword.errors)
                    if('token' in errors){
                        setTokenError(errors.token)
                    }
                    setErrors(errors);
                }
                else if(response.data?.changePassword.user){
                    router.push("/")
                }
                
            }}
        >
           { ({ isSubmitting }) => (
                <Form>
                    <InputFiled 
                    name="newPassword" 
                    placeholder="new password" 
                    label="New Password"
                    type="password"
                    />
                    <Box mt="4" color="red"> {tokenError? tokenError : null} </Box>
                    <Button mt={4} type="submit" colorScheme="teal" isLoading={isSubmitting} >Change Password</Button>                  
                </Form>
                 
            )}
        </Formik>
        </Wrapper>
        </>
     );
}

ChangePassword.getInitialProps =  ({query})  => {
   // console.log(context.params)
    return {token: query.token as string}
}
 
export default ChangePassword;