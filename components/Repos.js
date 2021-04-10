import React from "react";

import {
  Box,
  Divider,
  SimpleGrid,
  Text,
  VStack,
  Tooltip,
  Button,
  HStack,
  Link,
  Skeleton,
} from "@chakra-ui/react";

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
      {repos.map((repo) => (
        <VStack
          key={repo.id}
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
              <>
                {!repo.fork ? (
                  <Button rounded={50} size="xs" _hover={{}}>
                    source
                  </Button>
                ) : (
                  <Button rounded={50} size="xs" _hover={{}}>
                    forked
                  </Button>
                )}
              </>
              <>
                {repo.private && (
                  <Button rounded={50} size="xs" _hover={{}}>
                    Private
                  </Button>
                )}
              </>
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
      ))}
    </SimpleGrid>
  );
};

export default Repos;
