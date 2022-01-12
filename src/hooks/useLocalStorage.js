import { useState } from "react";

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    } else {
      localStorage.setItem(key, initValue);
      return initValue;
    }
  });
  const SetStoredValue = (newValue) => {
    localStorage.setItem(key, initValue);
    setValue(newValue);
  };

  return [value, SetStoredValue];
};
export default useLocalStorage;
