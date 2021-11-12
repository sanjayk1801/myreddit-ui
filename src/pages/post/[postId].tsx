import { Box, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import { usePostQuery } from "../../generated/graphql";

interface PostProps {
	postId: string;
}

const Post: NextPage<PostProps> = ({ postId }) => {
	const [{ data, fetching, error }] = usePostQuery({
		variables: { postId: parseInt(postId) },
	});

	return (
		<>
			<NavBar />
			{fetching ? (
				<div>Loading....</div>
			) : (
				<Box>
					<Heading m="10">{data.post.title}</Heading>
					<Box m="10">Author: {data.post.user.username}</Box>
					<Box m="10">{data.post.body}</Box>
				</Box>
			)}
		</>
	);
};

Post.getInitialProps = ({ query }) => {
	return { postId: query.postId as string };
};

export default Post;
