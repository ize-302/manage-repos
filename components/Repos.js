import React from "react";
import {
  Box,
  Divider,
  SimpleGrid,
  Text,
  VStack,
  Tooltip,
  HStack,
  Input,
  Skeleton,
  Tag,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Circle,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { LockIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/userContext";
import Link from "next/link";

// repo card
const RepoCard = ({ repo, onClick }) => {
  return (
    <>
      <VStack
        background={repo.checked && "gray.100"}
        border={
          repo.checked ? "1px solid green" : "1px solid rgb(234, 234, 234)"
        }
        rounded={5}
        height={["auto", "auto", "172px"]}
        _hover={{ border: "none", boxShadow: "lg" }}
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
                <CheckCircleIcon color="green" width={5} height={5} />
              ) : (
                <Circle width={5} height={5} border="2px solid green" />
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
    </>
  );
};

const Repos = () => {
  const { user } = React.useContext(UserContext);
  const router = useRouter();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [repos, setrepos] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [enteredGithubUsername, setenteredGithubUsername] = React.useState("");

  const fetchRepos = () => {
    setloading(true);
    const token = window.localStorage.getItem("accessToken");
    axios
      .get(
        `https://api.github.com/user/repos?sort=pushed&per_page=100&page=${router.query.page}`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then((response) => {
        setloading(false);
        response.data.forEach((item) => {
          Object.assign(item, { checked: false });
        });
        setrepos(response.data);
      })
      .catch((err) => {
        setloading(false);
        throw err;
      });
  };

  const handleDeleteRepos = () => {
    setloading(true);
    const token = window.localStorage.getItem("accessToken");
    // get selected repos
    const reposToDelete = repos.filter((repo) => {
      return repo.checked === true;
    });

    reposToDelete.forEach((repoToDelete) => {
      axios
        .delete(`https://api.github.com/repos/${repoToDelete.full_name}`, {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then((response) => {
          fetchRepos();
          toast({
            title: "Repo(s) has been deleted",
            description: "You may have to reload the page",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((err) => {
          setloading(false);
          console.log(err);
        });
    });
  };

  // check if any repo has been selected
  const checkIfSelected = () => {
    return repos.find((repo) => {
      return repo.checked === true;
    });
  };

  const handleToggleCheck = (repoSelected) => {
    const repoIndex = repos.findIndex(
      (repo) => repo.name === repoSelected.name
    );
    let reposCopy = [...repos];
    reposCopy[repoIndex] = {
      ...reposCopy[repoIndex],
      checked: !reposCopy[repoIndex].checked,
    };
    setrepos(reposCopy);
  };

  const countSelected = () => {
    let count = 0;
    repos.map((repo) => {
      if (repo.checked === true) {
        count = count + 1;
      }
    });
    return count;
  };

  const calcPageNum = () => {
    return Math.ceil(user.public_repos / 100);
  };

  const handlePagination = (direction) => {
    let currentPage = router.query.page === undefined ? 1 : router.query.page; // current page
    if (direction === "next") {
      let nextPage = Number(currentPage) + 1;
      window.location.href = "/home?page=" + nextPage;
    } else {
      let prevPage = Number(currentPage) - 1;
      window.location.href = "/home?page=" + prevPage;
    }
  };

  React.useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <>
      <SimpleGrid columns={[1, 1, 2, 3]} gap={6}>
        {loading &&
          [1, 2, 3, 4, 5, 6].map((item) => (
            <Skeleton
              key={item}
              height={["auto", "auto", "172px"]}
              speed={1.5}
            />
          ))}
        {!loading &&
          repos.map((repo) => (
            <RepoCard
              repo={repo}
              key={repo.id}
              onClick={() => handleToggleCheck(repo)}
            />
          ))}
      </SimpleGrid>
      {/* pagination */}
      <HStack marginTop={10} spacing={3} justifyContent="center">
        <Button
          disabled={router.query.page === undefined || router.query.page == 1}
          onClick={() => handlePagination("previous")}
        >
          Previous
        </Button>
        <Button
          disabled={router.query.page >= calcPageNum()}
          onClick={() => handlePagination("next")}
        >
          Next
        </Button>
      </HStack>
      {checkIfSelected() && (
        <HStack
          spacing={5}
          position="fixed"
          bottom="0"
          width="100%"
          height="70px"
          background="green.100"
          borderTop="1px solid green"
          left="0"
          zIndex="1"
          justifyContent="center"
        >
          <Text fontSize="18">
            <b style={{ fontSize: "22px" }}>{countSelected()}</b> Repo
            {countSelected() > 1 && "s "} selected
          </Text>
          <Button
            color="white"
            background="red.500"
            _hover={{}}
            onClick={onOpen}
          >
            Delete
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Delete repositories?</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Deleting a repository will permanently remove it from your
                profile.
                <Divider marginY={8} />
                <VStack alignItems="flex-start" spacing={3}>
                  <Text fontWeight="600">Your Github username</Text>
                  <Input
                    value={enteredGithubUsername}
                    onChange={(e) => setenteredGithubUsername(e.target.value)}
                  />
                </VStack>
              </ModalBody>
              <ModalFooter>
                <Button
                  width="full"
                  background="red.500"
                  color="white"
                  _hover={{}}
                  disabled={enteredGithubUsername !== user.login || loading}
                  onClick={() => handleDeleteRepos()}
                >
                  Delete repo(s)
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </HStack>
      )}
    </>
  );
};

export default Repos;
