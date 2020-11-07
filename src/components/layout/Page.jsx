import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { theme } from "../../../config/theme";
import Header from "./Header";
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
  display: flex;
  flex-direction: column;
`;

const Page = ({ children }) => (
  <PageContainer>
    <Helmet />
    <GlobalStyle />
    <Header />
    {children}
  </PageContainer>
);

export default Page;
