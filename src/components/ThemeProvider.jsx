import React, { createContext, useReducer, useEffect } from "react";

const initialTheme = {
  curCol: "light",
};

export function themeReducer(state, action) {
  if (action.type === "CHANGE_THEME") {
    return state.curCol === "light" ? { curCol: "dark" } : { curCol: "light" };
  }
}

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, themeDispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
