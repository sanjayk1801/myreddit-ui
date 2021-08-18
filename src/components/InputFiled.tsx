import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Textarea,
	propNames,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { InputHTMLAttributes } from "react";

type InputFiledProps = InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	label: string;
	textarea?: boolean;
};

export const InputFiled: React.FC<InputFiledProps> = ({
	size: _,
	textarea,
	...props
}) => {
	const [field, { error }] = useField(props);
	return (
		<FormControl isInvalid={!!error}>
			<FormLabel mt="5" htmlFor={field.name}>
				{props.label}
			</FormLabel>
			{!textarea && <Input {...field} {...props} id={field.name} />}
			{textarea && (
				<Textarea
					{...field}
					name={props.name}
					placeholder={props.placeholder}
					id={field.name}
				/>
			)}
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	);
};

export default InputFiled;
