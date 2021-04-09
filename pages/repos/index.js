import React from "react";
import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import axios from "axios";

const Repos = () => {
  const router = useRouter();
  React.useEffect(function mount() {
    if (router.query.accessToken) {
      window.localStorage.setItem("accessToken", router.query.accessToken);
      router.push("/repos");
    }
    const token = window.localStorage.getItem(
      "accessToken",
      router.query.accessToken
    );
    // user details
    axios.get(`/api/getAuthUser?accessToken=${token}`).then((response) => {
      console.log(response.data);
      return;
    });
  });
  return <Box>ss</Box>;
};

export default Repos;
