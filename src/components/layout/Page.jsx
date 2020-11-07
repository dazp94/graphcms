import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";

import theme from "../../../config/theme";
import ThemeContext from "../../context/ThemeContext";
import Header from "./Header";
import Helmet from "./Helmet";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    min-width: 300px;
    margin: 10px;
  }
`;

const PageContainer = styled.div`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
`;

const Page = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeContext.Provider>
      <PageContainer>
        <Helmet />
        <GlobalStyle theme={themeContext} />
        <Header />
        {children}
      </PageContainer>
    </ThemeContext.Provider>
  );
};

export default Page;
