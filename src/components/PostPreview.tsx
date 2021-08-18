import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

export interface PostPreviewProps {
	title: string;
	body: string;
	createdAt: string;
	author: string;
}

const PostPreview: React.FC<PostPreviewProps> = ({
	title,
	body,
	createdAt,
	author,
}) => {
	return (
		<Stack spacing={8}>
			<Box m="50px 100px 0 100px" p={10} shadow="md" borderWidth="1px">
				<Heading fontSize="xl">{title}</Heading>
				<Text mt={4}>{body}</Text>
				<Link color="red" fontSize="sm" href="">
					read more...
				</Link>
			</Box>
		</Stack>
	);
};

export default PostPreview;
