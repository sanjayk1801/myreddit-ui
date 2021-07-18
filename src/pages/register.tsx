import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control";
import { Input, Button } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { values } from "lodash";
import React from "react";
import Wrapper from "../components/Wrapper";

export interface RegisterProps {
    
}
 
const Register: React.FC <RegisterProps> = () => {
    return ( 
        <Wrapper varient="small">
        <Formik initialValues={{username: "", password: ""}}
            onSubmit={(values)=> {
            console.log(values);
            }}
        >
           { (values, handelChange) => (
                <Form>
                     <FormControl>
                       <FormLabel htmlFor="username">Username</FormLabel>
                       <Input 
                         id="username" 
                         placeholder="username" 
                         value={values.username}
                         onChange={handelChange}
                        />
                     </FormControl>
                </Form>
                 
            )}
        </Formik>
        </Wrapper>
     );
}
 
export default Register;