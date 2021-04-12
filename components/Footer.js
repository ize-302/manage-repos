import React from "react";
import { Text, Box, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box borderTop="1px solid rgb(234, 234, 234)" paddingY={5}>
      <Container maxW="6xl" display="flex" justifyContent="center">
        <Box>
          <Text>
            Source code on{" "}
            <a target="_blank" href="https://github.com/ize-302/manage-repos">
              <b>Github</b>
            </a>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
