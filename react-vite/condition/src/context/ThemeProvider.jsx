import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('white');

  //   const [data, setData] = useState('');

  //   async function fetchData(url) {
  //     try {
  //       let resp = await fetch(url);
  //       let data1 = '';
  //       setData(data1);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
