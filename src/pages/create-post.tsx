import { Box, Button, Link } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import InputFiled from "../components/InputFiled";
import Wrapper from "../components/Wrapper";
import { useCreatePostMutation, useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import  NextLink   from 'next/link'

export interface CreatePostProps {
    
}

const CreatePost: React.FC <CreatePostProps> = ({}) => {
    const [{data}, CreatePost] = useCreatePostMutation();
    const router = useRouter();
    return ( 
        <Wrapper varient="small">
        <Formik initialValues={{title: "", body: ""}}
            onSubmit={ async (values, {setErrors})=> {
                const response = await CreatePost(values)
                if(response.data.createPost.id){
    
                    router.push("/")
                }

            }}
        >
           { ({ isSubmitting }) => (
                <Form>
                       <InputFiled 
                            name="title" 
                            placeholder="title" 
                            label="Title"
                     />
                      <InputFiled 
                            name="body" 
                            placeholder="body" 
                            label="Body"
                            type="text"
                        
                     /> 
                     <Button mt={4} type="submit" colorScheme="teal" isLoading={isSubmitting} >Submit Post</Button>                  
                </Form>
                 
            )}
        </Formik>
        </Wrapper>
     );
}
 
export default CreatePost;