import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div
        style={{
          backgroundColor: theme,
          border: '2px solid black',
          height: '200px',
          width: '200px',
        }}
      ></div>
      home
    </div>
  );
}

export default Home;
