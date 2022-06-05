import React from "react";
import {
  Divider,
  Text,
  VStack,
  HStack,
  Input,
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
import { UserContext } from "../contexts/userContext";
import { deleteRepo } from "../calls";

const DeleteRepos = ({ repos, fetchRepos }) => {
  const { user } = React.useContext(UserContext);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setloading] = React.useState(false);
  const [enteredGithubUsername, setenteredGithubUsername] = React.useState("");

  const countSelected = () => {
    let checked = repos.filter(repo => repo.checked)
    return checked.length
  };

  const handleDeleteRepos = () => {
    setloading(true);
    // get selected repos
    const reposToDelete = repos.filter((repo) => {
      return repo.checked;
    });

    for (let i = 0; i <= reposToDelete.length; i++) {
      if (i < reposToDelete.length) {
        deleteRepo({ full_name: reposToDelete[i].full_name }).then().catch(err => {
          setloading(false);
          console.log(err);
        })
      }
      if (i === reposToDelete.length - 1) {
        toast({
          title: `${reposToDelete.length} Repo(s) have been deleted`,
          description: "You may have to reload the page",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        fetchRepos();
      }
    }
  };

  return (
    <>
      {countSelected() > 0 && (
        <HStack
          spacing={5}
          position="fixed"
          bottom={0}
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
}

export default DeleteRepos;