import { useState } from "react";

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    } else {
      localStorage.setItem(key(initValue));
      return initValue;
    }
  });

  return [value];
};
export default useLocalStorage;
