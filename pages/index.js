import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Box, Container, Text, Flex, Heading } from "@chakra-ui/layout";
import { Github } from "../components/Icons";

export default function Home() {
  const handleSignin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDir="column"
      alignItems="center"
      minH="100vh"
    >
      {/* main */}
      <Flex
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        flex={1}
      >
        <Container>
          <VStack spacing={20}>
            {/* <Heading fontSize="100px">🚀</Heading> */}
            <Heading
              fontSize="160px"
              textAlign="center"
              lineHeight="170px"
              color="#000"
            >
              Manage repos!
            </Heading>

            <Button
              background="brand.primary"
              color="white"
              fontWeight="400"
              paddingX={5}
              _hover={{
                border: "1px solid #000",
                background: "white",
                color: "#000",
              }}
              onClick={() => handleSignin()}
            >
              <HStack spacing={3}>
                <Github />
                <Text>Continue with Github</Text>
              </HStack>
            </Button>
          </VStack>
        </Container>
      </Flex>
      {/* footer */}
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        borderTop="1px solid rgb(234, 234, 234)"
        paddingY={5}
      >
        Created by
        <a target="_blank" href="https://github.com/ize-302">
          <b> Ize-302</b>
        </a>
      </Flex>
    </Box>
  );
}
