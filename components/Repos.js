import React from "react";
import {
  Divider,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Input,
  Skeleton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/userContext";
import { fetchReposService, DeleteRepoService } from "../services";

import RepoCard from "./RepoCard";

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
    fetchReposService(router.query.page)
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
    // get selected repos
    const reposToDelete = repos.filter((repo) => {
      return repo.checked === true;
    });

    reposToDelete.forEach((repoToDelete) => {
      DeleteRepoService(repoToDelete.full_name)
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
