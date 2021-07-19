import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import InputFiled from "../components/InputFiled";
import Wrapper from "../components/Wrapper";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

export interface LoginProps {
    
}

const Login: React.FC <LoginProps> = ({}) => {
    const [, Login] = useLoginMutation();
    const router = useRouter();
    return ( 
        <Wrapper varient="small">
        <Formik initialValues={{username: "", password: ""}}
            onSubmit={ async (values, {setErrors})=> {
                const response = await Login(values)
                if(response.data?.login.errors){
                    setErrors(toErrorMap(response.data.login.errors))
                }
                else if(response.data?.login.user){
                    router.push("/")
                }

            }}
        >
           { ({ isSubmitting }) => (
                <Form>
                       <InputFiled 
                        name="username" 
                        placeholder="username" 
                        label="Username"
                     />
                      <InputFiled 
                        name="password" 
                        placeholder="password" 
                        label="Password"
                        type="password"
                        
                     />   
                     <Button mt={4} type="submit" colorScheme="teal" isLoading={isSubmitting} >Login</Button>                  
                </Form>
                 
            )}
        </Formik>
        </Wrapper>
     );
}
 
export default Login;