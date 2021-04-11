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
  Circle,
} from "@chakra-ui/react";
import { UserContext } from "../../contexts/userContext";
import Repos from "../../components/Repos";
import axios from "axios";
import { useRouter } from "next/router";

const Home = () => {
  const { user } = React.useContext(UserContext);
  const router = useRouter();
  const [repos, setrepos] = React.useState([]);
  const [loading, setloading] = React.useState(false);

  React.useEffect(() => {
    setloading(true);
    const token = window.localStorage.getItem(
      "accessToken",
      router.query.accessToken
    );

    axios
      .get(`/api/getRepos?accessToken=${token}`)
      .then((response) => {
        setloading(false);
        setrepos(response.data);
      })
      .catch((err) => {
        setloading(false);
        throw err;
      });
  }, []);

  return (
    <Box>
      <HStack
        background="orange.100"
        rounded={3}
        border="1px solid"
        borderColor="orange.300"
        padding={3}
        marginBottom={10}
        justifyContent="center"
      >
        <Text>Can't find private repos? </Text>
        <Link
          color="green"
          fontWeight="600"
          href="https://github.com/apps/manage-repos/installations/new/"
        >
          Click here
        </Link>
        <Popover>
          <PopoverTrigger>
            <Circle
              background="red"
              width={4}
              height={4}
              backgroundColor="transparent"
              border="1px solid"
              borderColor="#000"
              cursor="pointer"
              fontSize="12"
              color="#000"
            >
              !
            </Circle>
          </PopoverTrigger>
          <PopoverContent _focus={{ outline: "none" }}>
            <PopoverArrow />
            <PopoverBody fontSize="12">
              You will be redirected to install Manage-repo's App
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      <Flex justifyContent="space-between" marginBottom={10}>
        <HStack spacing={[2, 2, 4]}>
          <Heading fontSize={[20, 20, 28]}>👋</Heading>
          <Heading fontSize={[18, 18, 24]}>Hi {user.login},</Heading>
        </HStack>
        <Text>
          <b>{loading ? "0" : user.public_repos}</b> Public Repositories
        </Text>
      </Flex>
      {/* repos */}
      <Repos repos={repos} loading={loading} />
    </Box>
  );
};

Home.layout = "dashboard";

export default Home;
