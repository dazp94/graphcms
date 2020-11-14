import { Switch, useColorMode } from "@chakra-ui/react";

const ThemeToggler = () => {
  const { toggleColorMode } = useColorMode();
  return <Switch onChange={toggleColorMode} />;
};

export default ThemeToggler;
