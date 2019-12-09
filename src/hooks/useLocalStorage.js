import { useState } from 'react'

export const useLocalStorage = (key, initalValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if(window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(initalValue))
    return initalValue;
  });

  const setValue = value => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}
