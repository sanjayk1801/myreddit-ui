import { Box } from "@chakra-ui/react";

export interface WrapperProps {
    varient?: "small" | "regular";
}
 
const Wrapper: React.FC<WrapperProps> = ({children, varient}) => {
    return ( 
        <Box mt={8} mx="auto" maxW={varient==="regular"? "800px": "400px"} w="100%"> 
            {children}
        </Box>
     );
}
 
export default Wrapper;