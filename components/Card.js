import React from "react";
import {
  Box,
  Divider,
  Text,
  VStack,
  Tooltip,
  HStack,
  Tag,
} from "@chakra-ui/react";
import { LockIcon, CheckCircleIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Card = ({ repo, onClick }) => {
  return (
    <VStack
      background={repo.checked && "gray.100"}
      border={
        repo.checked ? "1px solid green" : "1px solid gray"
      }
      rounded={5}
      height={["auto", "auto", "172px"]}
      _hover={{ boxShadow: "lg" }}
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Box padding={5} height={["auto", "auto", "70%"]} width="100%">
        <HStack justifyContent="space-between">
          <Text fontWeight="600" fontSize={18}>
            {repo.name}
          </Text>

          <Box onClick={() => onClick(repo)} cursor="pointer">
            {repo.checked ? (
              <CheckCircleIcon color="green" width={4} height={4} />
            ) : (
              <Box width={4} height={4} rounded="md" border="2px solid green" />
            )}
          </Box>
        </HStack>

        <Tooltip
          label={repo.description}
          fontSize="xs"
          background="#000"
          rounded={4}
          padding={2}
        >
          <Box fontWeight="400" fontSize={14} marginTop={3}>
            <Text textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden" display={["none", "none", "block"]}>
              {repo.description}
            </Text>
            <Text display={["block", "block", "none"]}>
              {repo.description}
            </Text>
          </Box>
        </Tooltip>
      </Box>
      <Box width="100%" height={["auto", "auto", "25%"]} paddingBottom={2}>
        <Divider marginBottom={2} />
        <HStack paddingX={3} justifyContent="space-between">
          <HStack spacing={3}>
            {repo.fork && (
              <Tag size="sm" colorScheme="blue" borderRadius="full">
                forked
              </Tag>
            )}
            {repo.private && (
              <HStack spacing={1} alignItems="baseline">
                <LockIcon w="3" h="3" />
                <Text fontSize="12">Private</Text>
              </HStack>
            )}
          </HStack>

          <Link href={`/repo/${repo.name}`} fontSize={14}>
            <a>
              <Text color="#10983D" textDecoration="underline">
                Open
              </Text>
            </a>
          </Link>
        </HStack>
      </Box>
    </VStack>
  );
};


export default Card