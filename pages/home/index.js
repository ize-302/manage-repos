import React from "react";
import { Box, Heading, HStack } from "@chakra-ui/layout";
import { UserContext } from "../../contexts/userContext";

const Repos = () => {
  const { user } = React.useContext(UserContext);
  return (
    <Box>
      <HStack spacing={4}>
        <Heading>👋</Heading>
        <Heading fontSize={24}>Hi {user.login},</Heading>
      </HStack>
    </Box>
  );
};

Repos.layout = "dashboard";

export default Repos;
