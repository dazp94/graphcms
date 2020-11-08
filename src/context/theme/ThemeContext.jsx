import { createContext } from "react";
import theme from "../../../config/theme";

const ThemeContext = createContext({
  theme: theme.light,
  toggleTheme: () => {},
});

export default ThemeContext;
