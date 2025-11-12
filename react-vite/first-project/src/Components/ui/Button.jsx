import React, { useState } from 'react';

function Button({ text, image }) {
  let [name, setName] = useState('ahmed');

  // let name = 'ahmed';

  function hello(inputValue) {
    console.log(name);
  }

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
        <h1>{name}</h1>
        {text}
      </button>

      <input
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
        type='text'
        value={name}
      />
      <img src={image} alt='' />
      <h1>{name}</h1>
    </>
  );
}

export default Button;
