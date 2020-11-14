import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import theme from "../../config/theme";
import Page from "../components/Page";

const App = ({ Component, pageProps }) => {
  const customTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={customTheme}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
};

export default App;
