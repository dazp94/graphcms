import ThemeContext from "./ThemeContext";

const ThemeToggler = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={() => toggleTheme(theme)}
          style={{ backgroundColor: theme.background, color: theme.color }}
        >
          {`Turn ${theme.isDark ? "on" : "off"} the lights`}
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggler;
