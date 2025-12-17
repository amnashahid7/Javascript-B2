import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      About
      <div
        style={{
          backgroundColor: theme,
          border: '2px solid black',
          height: '200px',
          width: '200px',
        }}
      ></div>
    </div>
  );
}

export default About;
