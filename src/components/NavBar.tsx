import { Box, Flex, Link, LinkBox, Button } from "@chakra-ui/react";
import  NextLink   from 'next/link'
import router from "next/router";
import React, { useMemo } from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

export interface NavBarProps {}
 
const NavBar: React.FC<NavBarProps> = () => {
    
    // useMeQuery often returns the null value in response. So to make sure urql knows 
    // its return data type to invalidate the related cache 
    // we need to pass the __typename of the MeDocumnet as a context object to the MeQuery.
    const context = useMemo(() => ({ additionalTypenames: ['User'] }), []);
    const [{data, fetching}] = useMeQuery({context: context})

    const [{fetching: fetchingLogout}, handelLogout] = useLogoutMutation()
    
    let body = null;
    
    if(fetching){
        body = null;
    }else if(!data?.me){
        body = (
				<Flex height="50">
					<NextLink href="/login">
						<Link mr="2">login</Link>
					</NextLink>
					<NextLink href="/register">
						<Link>register</Link>
					</NextLink>
				</Flex>
			
		);
    }else{
        body = (
			<Flex height="50">
				
				<Box mr={"2"}>{data.me.username}</Box>
				<Button
					varient="link"
					onClick={() => {
						router.push("/create-post");
					}}
				>
					{" "}
					New Post{" "}
				</Button>
				<Button
					ml="2"
					varient="link"
					onClick={() => {
						handelLogout({}, { additionalTypenames: ["User"] });
					}}
					isLoading={fetchingLogout}
				>
					{" "}
					logout{" "}
				</Button>
			</Flex>
		);
    }

    return (
        <Flex bg="tomato" p={4}>
            <Box ml={'auto'}>
                {body}
            </Box>
        </Flex>
      );
}
 
export default NavBar;