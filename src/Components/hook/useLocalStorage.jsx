import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const tasks = localStorage.getItem(key);
      return tasks ? JSON.parse(tasks) : initialValue;
    }
    catch (exception) {
      console.log(`Exception => ${exception}`);
      return initialValue;
    }
  })
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;