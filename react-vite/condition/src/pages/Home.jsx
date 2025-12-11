import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkContext } from '../context/darkContext';

function Home() {
  const { darkMode, setDarkMode } = useContext(DarkContext);

  console.log(darkMode);

  return (
    <div>
      <Link to={'/contact/ahmed'}>ahmed</Link>
      <Link to={'/contact/raza'}>raza</Link>
      <Link to={'/contact/ali'}>ali</Link>
    </div>
  );
}

export default Home;
