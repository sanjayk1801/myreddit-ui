import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import InputFiled from "../components/InputFiled";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

export interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
	const [, register] = useRegisterMutation();
	const router = useRouter();

	return (
		<>
			<NavBar />
			<Wrapper varient="small">
				<Formik
					initialValues={{ username: "", email: "", password: "" }}
					onSubmit={async (values, { setErrors }) => {
						const response = await register(values);
						if (response.data?.register.errors) {
							setErrors(
								toErrorMap(response.data.register.errors)
							);
						} else if (response.data?.register.user) {
							router.push("/");
						}
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<InputFiled
								name="username"
								placeholder="username"
								label="Username"
							/>
							<InputFiled
								name="email"
								placeholder="email"
								label="Email"
								type="email"
							/>
							<InputFiled
								name="password"
								placeholder="password"
								label="Password"
								type="password"
							/>
							<Button
								mt={4}
								type="submit"
								colorScheme="teal"
								isLoading={isSubmitting}
							>
								register
							</Button>
						</Form>
					)}
				</Formik>
			</Wrapper>
		</>
	);
};
 
export default Register;