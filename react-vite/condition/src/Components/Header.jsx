import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    if (theme === 'white') {
      setTheme('black');
    } else {
      setTheme('white');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '20px',
        marginRight: '20px',
      }}
    >
      <h1>Header</h1>
      <div>
        <Link to={'/'}>ahmed</Link>
        <Link to={'/contact'}>raza</Link>
        <Link to={'/about'}>ali</Link>
      </div>
      <button onClick={handleTheme}>Dark</button>
    </div>
  );
}

export default Header;
