import { Box, Button, Link } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import InputFiled from "../components/InputFiled";
import Wrapper from "../components/Wrapper";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import  NextLink   from 'next/link'
import NavBar from "../components/NavBar";

export interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
	const [, Login] = useLoginMutation();
	const router = useRouter();
	return (
		<>
			<NavBar />
			<Wrapper varient="small">
				<Formik
					initialValues={{ usernameOrEmail: "", password: "" }}
					onSubmit={async (values, { setErrors }) => {
						const response = await Login(values);
						if (response.data?.login.errors) {
							setErrors(toErrorMap(response.data.login.errors));
						} else if (response.data?.login.user) {
							router.push("/");
						}
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<InputFiled
								name="usernameOrEmail"
								placeholder="username or email"
								label="Username or Email"
							/>
							<InputFiled
								name="password"
								placeholder="password"
								label="Password"
								type="password"
							/>
							<Box>
								<NextLink href="/forgot-password">
									<Link>forgot password?</Link>
								</NextLink>
							</Box>
							<Button
								mt={4}
								type="submit"
								colorScheme="teal"
								isLoading={isSubmitting}
							>
								Login
							</Button>
						</Form>
					)}
				</Formik>
			</Wrapper>
		</>
	);
};
 
export default Login;