import React from "react";
import {
  Button,
  Flex,
  Text,
  Switch,
  FormControl,
  FormLabel,
  Box,
  Container,
} from "@chakra-ui/react";
import { ModeContext } from "../contexts/modeontext";

const Footer = () => {
  const { isDark, toggleMode } = React.useContext(ModeContext);

  return (
    <Box borderTop="1px solid rgb(234, 234, 234)" paddingY={5}>
      <Container maxW="6xl" display="flex" justifyContent="space-between">
        <Box>
          <Text>
            Source code on{" "}
            <a target="_blank" href="https://github.com/ize-302/manage-repos">
              <b>Github</b>
            </a>
          </Text>
        </Box>
        <Box>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="toggle-mode" mb="0">
              {isDark ? "Dark" : "Light"}
            </FormLabel>
            <Switch onChange={() => toggleMode()} id="toggle-mode" />
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
