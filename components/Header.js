import React from "react";
import {
  Box,
  Container,
  Text,
  Avatar,
  HStack,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { useRouter } from "next/router";

const Header = ({ userData }) => {
  const router = useRouter();
  const handleLogout = () => {
    window.localStorage.removeItem("accessToken");
    router.push("/");
  };
  return (
    <Box borderBottom="1px solid rgb(234, 234, 234)" paddingY={5}>
      <Container maxW="6xl">
        <HStack justifyContent="space-between">
          <Logo width="100px" />
          <HStack spacing={3}>
            <Tooltip label={userData.login} fontSize="xs">
              <Avatar
                src={userData.avatar_url}
                height="35px"
                width="35px"
                border="1px solid #000"
              />
            </Tooltip>
            <Button rounded={50} size="sm" onClick={() => handleLogout()}>
              Logout
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
