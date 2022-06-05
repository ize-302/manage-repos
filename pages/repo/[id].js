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
import { useRouter } from "next/router";
import { UserContext } from "../../contexts/userContext";
import { getRepo, updateRepo } from "../../calls";

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
    setsubmitting(true);
    updateRepo({ login: user.login, id: router.query.id, name: repoName, description: description, homepage }).then((data) => {
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
    setloading(true);
    getRepo({ login: user.login, id: router.query.id }).then((data) => {
      setloading(false);
      const { name, description, homepage, html_url } = data;
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
