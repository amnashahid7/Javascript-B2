import React, { useState } from 'react';
import { DarkContext } from './darkContext';

function ContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState('kasjsjakjsk');

  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
}

export default ContextProvider;
