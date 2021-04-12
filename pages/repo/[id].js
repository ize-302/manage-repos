import React from "react";
import {
  Box,
  Button,
  Container,
  Input,
  VStack,
  Textarea,
  Text,
  useToast,
  Skeleton,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { UserContext } from "../../contexts/userContext";
import Link from "next/link";

const Repo = () => {
  const [repoName, setrepoName] = React.useState("");
  const [homepage, sethomepage] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [githubUrl, setgithubUrl] = React.useState("");
  const [loading, setloading] = React.useState(true);
  const [submitting, setsubmitting] = React.useState(false);
  const router = useRouter();
  const { user } = React.useContext(UserContext);
  const toast = useToast();

  const handleUpdateRepo = () => {
    const token = window.localStorage.getItem("accessToken");
    setsubmitting(true);
    axios
      .patch(
        `https://api.github.com/repos/${user.login}/${router.query.id}`,
        {
          name: repoName,
          description: description,
          homepage: homepage,
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then((response) => {
        setsubmitting(false);
        toast({
          title: "Repo has been updated",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        setsubmitting(false);
        toast({
          title: err.response.data.errors[0]["message"],
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  React.useEffect(() => {
    const token = window.localStorage.getItem("accessToken");
    setloading(true);
    axios
      .get(`https://api.github.com/repos/${user.login}/${router.query.id}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        setloading(false);
        const { name, description, homepage, html_url } = response.data;
        setrepoName(name);
        sethomepage(homepage);
        setdescription(description);
        setgithubUrl(html_url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  return (
    <Container maxW="lg">
      <Heading marginBottom={10} fontSize={24}>
        Update Repository
      </Heading>
      <VStack spacing={5} width="100%">
        <Skeleton isLoaded={!loading} width="100%">
          <VStack spacing={2} alignItems="flex-start">
            <Text>Name</Text>
            <Input
              value={repoName}
              onChange={(e) => setrepoName(e.target.value)}
            />
          </VStack>
        </Skeleton>
        <Skeleton isLoaded={!loading} width="100%">
          <VStack spacing={2} alignItems="flex-start">
            <Text>Homepage</Text>
            <Input
              value={homepage}
              onChange={(e) => sethomepage(e.target.value)}
            />
          </VStack>
        </Skeleton>
        <Skeleton isLoaded={!loading} width="100%">
          <VStack spacing={2} alignItems="flex-start">
            <Text>Description</Text>
            <Textarea
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              height={32}
            />
          </VStack>
        </Skeleton>
        <Skeleton isLoaded={!loading} width="100%">
          <Button
            onClick={() => handleUpdateRepo()}
            width="full"
            background="black"
            size="lg"
            color="white"
            disabled={submitting}
          >
            Update
          </Button>
        </Skeleton>
      </VStack>
      <Box marginTop={10} textAlign="center">
        <a href={githubUrl} target="_blank">
          <Text color="green" textDecoration="underline">
            Open in Github
          </Text>
        </a>
      </Box>
    </Container>
  );
};

Repo.layout = "dashboard";

export default Repo;
