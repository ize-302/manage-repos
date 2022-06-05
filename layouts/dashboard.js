import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Flex, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/userContext";
import { user } from "../pages/calls";

const DashboardLayout = (props) => {
  const { storeUser } = React.useContext(UserContext);
  const router = useRouter();

  React.useEffect(
    function mount() {
      if (router.query.accessToken) {
        window.localStorage.setItem("accessToken", router.query.accessToken);
        window.location.replace("/home");
      }
      const token = window.localStorage.getItem("accessToken",);
      if (!token) {
        window.location.href = "/";
      }
      // user details
      user().then((data) => {
        storeUser(data);
      })
        .catch((err) => {
          return err;
        });
    },
    [router]
  );
  return (
    <>
      <Head>
        <title>Manage Repos</title>
        <meta charSet="utf-8" />
      </Head>

      <Box display="flex" justifyContent="center" flexDir="column" minH="100vh">
        <Header />
        {/* main */}
        <Flex flex={1} marginY={10}>
          <Container maxW="6xl">{props.children}</Container>
        </Flex>
        {/* footer */}
        <Footer />
      </Box>
    </>
  );
};

export default DashboardLayout;
