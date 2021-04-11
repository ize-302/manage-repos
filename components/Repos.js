import React from "react";

import {
  Box,
  Divider,
  SimpleGrid,
  Text,
  VStack,
  Tooltip,
  HStack,
  Link,
  Skeleton,
  Tag,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";

const RepoCard = ({ repo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUpdatRepo = (repo) => {
    console.log(repo);
  };

  return (
    <>
      {/* modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent rounded={3}>
          <ModalHeader>Update</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={8}>
              <Input placeholder="Name" size="md" value={repo.name} />
              <Textarea
                placeholder="Description"
                value={repo.description}
                size="md"
                height={48}
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              background="#000"
              color="white"
              fontWeight="400"
              _hover={{}}
              onClick={() => handleUpdatRepo(repo)}
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* modal */}
      <VStack
        onClick={onOpen}
        border="1px solid rgb(234, 234, 234)"
        rounded={5}
        height={["auto", "auto", "172px"]}
        _hover={{ boxShadow: "lg", cursor: "pointer", border: "none" }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box padding={5} height={["auto", "auto", "70%"]}>
          <Text fontWeight="600" fontSize={18}>
            {repo.name}
          </Text>
          <Tooltip
            label={repo.description}
            fontSize="xs"
            background="#000"
            rounded={4}
            padding={2}
          >
            <Text fontWeight="400" fontSize={14} marginTop={3}>
              <Text display={["none", "none", "block"]}>
                {repo.description && repo.description.slice(0, 90) + "..."}
              </Text>
              <Text display={["block", "block", "none"]}>
                {repo.description}
              </Text>
            </Text>
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
            </HStack>

            <Link
              href={repo.html_url}
              fontSize={14}
              target="_blank"
              color="#10983D"
            >
              Open in Github
            </Link>
          </HStack>
        </Box>
      </VStack>
    </>
  );
};

const Repos = ({ repos, loading }) => {
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} gap={6}>
      {loading &&
        [1, 2, 3, 4, 5, 6].map((item, index) => (
          <Skeleton
            key={index}
            height={["auto", "auto", "172px"]}
            speed={1.5}
          />
        ))}
      {!loading && repos.map((repo) => <RepoCard repo={repo} key={repo.id} />)}
    </SimpleGrid>
  );
};

export default Repos;
