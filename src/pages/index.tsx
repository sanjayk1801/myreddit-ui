import { Box, Button, Center } from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import PostPreview from "../components/PostPreview";
import { usePaginatedPostsQuery } from "../generated/graphql";

const Index = () => {
	const size = 10;
	const [page, setPage] = useState(0);
	const [posts, SetPosts] = useState([]);
	const [{ data, fetching }] = usePaginatedPostsQuery({
		variables: { size: size, pageIndex: page },
	});

	React.useEffect(() => {
		if (data?.paginatedPosts.posts) {
			SetPosts((posts) => [...posts, ...data.paginatedPosts.posts]);
		}
	}, [data]);

	return (
		<div>
			<NavBar />
			{fetching && posts.length == 0 ? (
				<div>loading....</div>
			) : (
				<div>
					{posts.map((p) => (
						<PostPreview
							id={p.id}
							title={p.title}
							body={p.bodySnippet}
							author={p.user.username}
							createdAt={p.createdAt}
						></PostPreview>
					))}
				</div>
			)}
			{data?.paginatedPosts.posts.length === size ? (
				<Center p="10">
					<Button
						isLoading={fetching}
						onClick={() => setPage(page + 1)}
					>
						Load More
					</Button>
				</Center>
			) : (
				!fetching && <Center p="10"> Thants all Folks!!!</Center>
			)}
		</div>
	);
};

export default Index;
`