import { Flex, Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      borderTop="1px solid rgb(234, 234, 234)"
      paddingY={5}
    >
      <Text>
        Source code on{" "}
        <a target="_blank" href="https://github.com/ize-302/manage-repos">
          <b>Github</b>
        </a>
      </Text>
    </Flex>
  );
};

export default Footer;
