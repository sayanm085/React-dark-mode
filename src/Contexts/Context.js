import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  thememode: "light",
  darkmode: () => {},
  lightmode: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme 
