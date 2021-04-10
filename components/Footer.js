import { Flex } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      borderTop="1px solid rgb(234, 234, 234)"
      paddingY={5}
    >
      Created by
      <a target="_blank" href="https://github.com/ize-302">
        <b> Ize-302</b>
      </a>
    </Flex>
  );
};

export default Footer;
