import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Box, Container, Text, Flex, Heading } from "@chakra-ui/layout";
import { Github } from "../components/Icons";
import { auth } from "../config/firebase";
import firebase from "firebase/app";

export default function Home() {
  const handleSignin = () => {
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope("repo");
    auth
      .signInWithRedirect(provider)
      .then(function (result) {
        // This gives you a GitHub Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        if (errorCode === "auth/account-exists-with-different-credential") {
          alert("You have signed up with a different provider for that email.");
          // Handle linking here if your app allows it.
        } else {
          console.error(error);
        }
      });
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
