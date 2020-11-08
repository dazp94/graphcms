import React, { useContext, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import theme from "../../../config/theme";
import ThemeContext from "../../context/theme/ThemeContext";
import ThemeToggler from "../../context/theme/ThemeToggler";
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

  const toggleTheme = (contextTheme) =>
    contextTheme.isDark
      ? setState({ ...state, theme: theme.light })
      : setState({ ...state, theme: theme.dark });

  const [state, setState] = useState({
    theme: themeContext.theme,
    toggleTheme: toggleTheme,
  });

  return (
    <ThemeContext.Provider value={state}>
      <PageContainer>
        <Helmet />
        <GlobalStyle theme={state.theme} />
        <Header />
        <ThemeToggler />
        {children}
      </PageContainer>
    </ThemeContext.Provider>
  );
};

export default Page;
