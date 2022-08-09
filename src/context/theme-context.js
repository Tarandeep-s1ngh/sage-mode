import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    darkTheme:
      JSON.parse(localStorage.getItem("VIDTHEME")) | { darkTheme: true },
  });

  return (
    <ThemeContext.Provider value={{ themeState, setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
