import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return [darkMode, setDarkMode, toggleMode];
};
export default useDarkMode;
