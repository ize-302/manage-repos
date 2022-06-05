import React from 'react';
import {
  HStack,
  Button,
} from "@chakra-ui/react";

const Pagination = ({ handlePagination }) => {
  return (
    <HStack marginTop={10} spacing={3} justifyContent="center">
      <Button
        onClick={() => handlePagination()}
      >
        More
      </Button>
    </HStack>
  );
}

export default Pagination;