import React, { useEffect, useState } from 'react';

const useDebounce = (value) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeID = setTimeout(() => {
      setDebounceValue(value);
    }, 1000);
    return () => clearTimeout(timeID);
  }, [value]);
  return debounceValue;
};

export default useDebounce;
