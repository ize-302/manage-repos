import React from 'react';
import "../styles/globals.css";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { Fonts } from "../Fonts";
import LayoutWrapper from "../layouts/layout-wrapper";
import UserContextProvider from "../contexts/userContext";

const colors = {
  brand: {
    primary: "#000",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
});

MyApp.getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

function MyApp({ Component, pageProps }) {
  return (
    <Box background="white">
      <ChakraProvider theme={theme}>
        <Fonts />
        <UserContextProvider>
          <LayoutWrapper {...pageProps}>
            <Component {...pageProps} />
          </LayoutWrapper>
        </UserContextProvider>
      </ChakraProvider>
    </Box>
  );
}

export default MyApp;
