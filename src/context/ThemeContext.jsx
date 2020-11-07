import { createContext } from "react";
import theme from "../../config/theme";

const ThemeContext = createContext(theme.dark);

export default ThemeContext;
