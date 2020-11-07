import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import { theme } from "../../theme";
import Helmet from "./Helmet";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background: ${(props) =>
      props?.theme?.background ? props.theme.background : theme.background};
    min-width: 300px;
    margin: 10px;
  }
`;

const PageContainer = styled.div`
  min-height: calc(100vh);
`;

const Page = ({ children }) => (
  <PageContainer>
    <Helmet />
    <GlobalStyle />
    {children}
  </PageContainer>
);

export default Page;
