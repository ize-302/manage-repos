import React from "react";
import {
  Box,
  Heading,
  HStack,
  Flex,
  Text,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { UserContext } from "../contexts/userContext";
import Repos from "../components/Repos";
import axios from "axios";
import { useRouter } from "next/router";

const Home = () => {
  const { user } = React.useContext(UserContext);
  const router = useRouter();

  const [showNotification, setshowNotification] = React.useState(false);

  React.useEffect(function mount() {
    const token = window.localStorage.getItem(
      "accessToken",
      router.query.accessToken
    );

    axios
      .get("https://api.github.com/user/installations", {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      })
      .then((response) => {
        let installation = response.data.installations.find((installation) => {
          return installation.app_slug === "manage-repos";
        });

        if (!installation) {
          setshowNotification(true);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <Box>
      <Flex justifyContent="space-between" marginBottom={10}>
        <HStack spacing={[2, 2, 4]}>
          <Heading fontSize={[20, 20, 28]}>👋</Heading>
          <Heading fontSize={[18, 18, 24]}>Hi {user.login},</Heading>
        </HStack>
        {!showNotification && (
          <Text>
            <b>{user.public_repos}</b> Public Repositories
          </Text>
        )}
      </Flex>
      {/* repos */}

      {showNotification ? (
        <HStack
          background="orange.100"
          rounded={3}
          border="1px solid"
          borderColor="orange.300"
          padding={3}
          marginBottom={10}
          justifyContent="center"
        >
          <Text>Complete setup</Text>
          <Link
            color="green"
            fontWeight="600"
            href="https://github.com/apps/manage-repos/installations/new/"
          >
            Click here
          </Link>
          <Popover trigger="hover">
            <PopoverTrigger>
              <InfoIcon />
            </PopoverTrigger>
            <PopoverContent _focus={{ outline: "none" }}>
              <PopoverArrow />
              <PopoverBody fontSize="12">
                You will be asked to allow Manage-repo access your repositories
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
      ) : (
        <Repos />
      )}
    </Box>
  );
};

Home.layout = "dashboard";

export default Home;
