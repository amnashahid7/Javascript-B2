import React from 'react';

function Button({ text ,}) {
  return (
    <>
      <button
        style={{
          padding: '10px',
          border: 'none',
          backgroundColor: 'red',
          color: 'white',
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
