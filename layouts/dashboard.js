import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Flex, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";

const DashboardLayout = (props) => {
  const router = useRouter();
  const [userData, setuserData] = React.useState({});

  React.useEffect(function mount() {
    if (router.query.accessToken) {
      window.localStorage.setItem("accessToken", router.query.accessToken);
      router.push("/home");
    }
    const token = window.localStorage.getItem(
      "accessToken",
      router.query.accessToken
    );
    if (!token) {
      router.push("/");
    }
    // user details
    axios.get(`/api/getAuthUser?accessToken=${token}`).then((response) => {
      return setuserData(response.data);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Manage Repos</title>
        <meta charSet="utf-8" />
      </Head>

      <Box display="flex" justifyContent="center" flexDir="column" minH="100vh">
        <Header userData={userData} />
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
