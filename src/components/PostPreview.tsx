import { Box, Divider, Link, Text } from "@chakra-ui/react";
import React from "react";

export interface PostPreviewProps {
    title: string,
    body: string
}
 
const PostPreview: React.FC<PostPreviewProps> = ({title, body}) => {
    return (
        <>
        <Box p={4} display={{ md: "flex" }}>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Link
                mt={1}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                href="#"
                >
                {title}
                </Link>
                <Text mt={2} color="gray.500">
                {body}
                </Text>
            </Box>
        </Box>
            <Divider />
        </>
        
     );
}
 
export default PostPreview;