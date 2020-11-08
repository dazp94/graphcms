import { ChakraProvider, extendTheme } from "@chakra-ui/core";
import { useEffect } from "react";
import Page from "../components/layout/Page";
import "../../config/index.css";
const App = ({ Component, pageProps }) => {
  useEffect(() => {
    document.body.className = (document.body.className ?? "").replace(
      "no-js",
      "js"
    );
  }, []);

  const config = {
    useSystemColorMode: true,
    initialColorMode: "light",
  };

  const customTheme = extendTheme({ config });

  return (
    <ChakraProvider theme={customTheme}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
};

export default App;
