import { Box, Flex, Spacer, Heading } from "@chakra-ui/core";
import React from "react";
import AddNewPost from "./add-new-post";

const Navbar = () => {
  return (
    <Box position="sticky" top={0} p={4} bg="gray.100" zIndex={1}>
        <Flex>
          <Box p="4">
            <Flex>
              <Heading>STC RANT</Heading>
            </Flex>   
          </Box>
          <Spacer />
          <Box p="4">
            <AddNewPost />
          </Box>
        </Flex>
    </Box>
  );
};

export default Navbar;