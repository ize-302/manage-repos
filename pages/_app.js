import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Fonts } from "../Fonts";
import { Provider } from "next-auth/client";

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

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
