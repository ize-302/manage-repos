import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Fonts } from "../Fonts";
import { Provider } from "next-auth/client";
import LayoutWrapper from "../layouts/layout-wrapper";

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
    <ChakraProvider theme={theme}>
      <Fonts />
      <Provider session={pageProps.session}>
        <LayoutWrapper {...pageProps}>
          <Component {...pageProps} />
        </LayoutWrapper>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
