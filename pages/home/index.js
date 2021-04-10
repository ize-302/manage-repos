import React from "react";
import { Box, Heading, HStack, Flex, Text } from "@chakra-ui/layout";
import { UserContext } from "../../contexts/userContext";
import Repos from "../../components/Repos";
import axios from "axios";
import { useRouter } from "next/router";

const Home = () => {
  const { user } = React.useContext(UserContext);
  const router = useRouter();
  const [repos, setrepos] = React.useState([]);
  const [totalCount, settotalCount] = React.useState("0");
  const [loading, setloading] = React.useState(false);

  React.useEffect(() => {
    setloading(true);
    const token = window.localStorage.getItem(
      "accessToken",
      router.query.accessToken
    );

    const page = router.query.page;

    axios
      .get(`/api/getRepos?accessToken=${token}&page=${page}`)
      .then((response) => {
        setloading(false);
        const { total_count, repositories } = response.data;
        setrepos(repositories);
        settotalCount(total_count);
      })
      .catch((err) => {
        setloading(false);
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
        <Text>
          <b>{totalCount}</b> Repositories
        </Text>
      </Flex>

      {/* repos */}
      <Repos repos={repos} loading={loading} />
    </Box>
  );
};

Home.layout = "dashboard";

export default Home;
