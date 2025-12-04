import React from 'react';

function Button({ text, bgc, textColor, radius }) {
  return (
    <button
      style={{
        color: textColor,
        backgroundColor: bgc,
        padding: '10px',
        borderRadius: radius,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
