import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Helmet from "./Helmet";
import ThemeToggler from "./ThemeToggler";

const PageContainer = styled.div`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
`;

const Page = ({ children }) => {
  return (
    <PageContainer>
      <Helmet />
      <Header />
      <ThemeToggler />
      {children}
    </PageContainer>
  );
};

export default Page;
