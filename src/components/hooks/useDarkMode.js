import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkModeActive");

  return [darkMode, setDarkMode];
}
