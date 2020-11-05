import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import { theme } from "../../theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');

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
    <GlobalStyle />
    {children}
  </PageContainer>
);

export default Page;
