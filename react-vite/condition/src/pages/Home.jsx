import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to={'/contact/ahmed'}>ahmed</Link>
      <Link to={'/contact/raza'}>raza</Link>
      <Link to={'/contact/ali'}>ali</Link>
    </div>
  );
}

export default Home;
