import { Button, useColorMode } from "@chakra-ui/core";

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default ThemeToggler;
