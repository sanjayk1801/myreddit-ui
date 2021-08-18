import { Button } from "@chakra-ui/react";
import { Field, Form, Formik, useField } from "formik";
import { useRouter } from "next/router";
import React from "react";
import InputFiled from "../components/InputFiled";
import Wrapper from "../components/Wrapper";
import { useCreatePostMutation } from "../generated/graphql";
import NavBar from "../components/NavBar";

export interface CreatePostProps {}

const CreatePost: React.FC<CreatePostProps> = ({}) => {
	const [, CreatePost] = useCreatePostMutation();
	const router = useRouter();
	return (
		<>
			<NavBar />
			<Wrapper varient="regular">
				<Formik
					initialValues={{ title: "", body: "" }}
					onSubmit={async (values, { setErrors }) => {
						const response = await CreatePost(values);
						if (response.data.createPost.id) {
							router.push("/");
						}
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<InputFiled
								name="title"
								placeholder="title"
								label="Title"
							/>

							<InputFiled
								textarea
								name="body"
								placeholder="body"
								label="Body"
							/>

							<Button
								mt={4}
								type="submit"
								colorScheme="teal"
								isLoading={isSubmitting}
							>
								Submit Post
							</Button>
						</Form>
					)}
				</Formik>
			</Wrapper>
		</>
	);
};

export default CreatePost;
