import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { useRouter } from "next/router";

const Done = () => {
  const router = useRouter();
  return (
    <Box display="flex" justifyContent="center" flexDir="column" minH="70vh">
      <Flex
        flex={1}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        {router.query.ref === "delete-repos" && "Repos Deleted"}
      </Flex>
    </Box>
  );
};

Done.layout = "dashboard";

export default Done;
