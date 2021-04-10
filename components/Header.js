import React from "react";
import {
  Box,
  Container,
  Avatar,
  HStack,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { UserContext } from "../contexts/userContext";

const Header = () => {
  const { user, logout } = React.useContext(UserContext);

  return (
    <Box borderBottom="1px solid rgb(234, 234, 234)" paddingY={5}>
      <Container maxW="6xl">
        <HStack justifyContent="space-between">
          <Logo width="100px" />
          <HStack spacing={3}>
            <Tooltip label={user.login} fontSize="xs">
              <Avatar
                src={user.avatar_url}
                height="35px"
                width="35px"
                border="1px solid #000"
              />
            </Tooltip>
            <Button rounded={50} size="sm" onClick={() => logout()}>
              Logout
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
