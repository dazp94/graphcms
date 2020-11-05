import Page from "../components/layout/Page";
import { useEffect } from "react";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    document.body.className = (document.body.className ?? "").replace(
      "no-js",
      "js"
    );
  }, []);

  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default App;
