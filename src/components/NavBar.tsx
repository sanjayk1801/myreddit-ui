import { Box, Flex, Link, LinkBox, Button } from "@chakra-ui/react";
import  NextLink   from 'next/link'
import React from "react";
import { useMeQuery } from "../generated/graphql";

export interface NavBarProps {
    
}
 
const NavBar: React.FC<NavBarProps> = () => {
    const [{data, fetching}] = useMeQuery()
    let body = null;
    if(fetching){
        body = null;
    }else if(!data?.me){
        console.log('1', data)
        body = (
            <>
                <NextLink href="/login">
                        <Link mr="2">login</Link>
                    </NextLink>
                    <NextLink  href="/register">
                        <Link>register</Link>
                </NextLink>
            </>
        )
    }else{
        body = (
            <Flex>
            <Box>{data.me.username}</Box>
            <Button varient="link"> logout </Button>
            </Flex>
        )
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