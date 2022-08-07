import React, { useState, useEffect } from 'react';

const useWindowResize = () => {
  const [windowResult, setWindowResult] = useState({});

  useEffect(() => {
    const reportWindowSize = () => {
      setWindowResult({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };
    window.onresize = reportWindowSize;
    window.addEventListener('resize', reportWindowSize);
     return ()=>{window.removeEventListener('resize', reportWindowSize)};
  }, []);

  return windowResult;
};

export default useWindowResize;
