import React, { useState } from 'react';
import styles from './Button.module.css';

function Button({ text, image }) {
  let [name, setName] = useState('ahmed');
  let namesList = [
    'ahmed',
    'sayed',
    'mohamed',
    'ali',
    'omar',
    'youssef',
    'raza',
    'mahmoud',
    'hossam',
    'islam',
  ];

  // create array of objects that eac object should have title, author and description .add map on it and show all blogs in cards

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

      <button className={styles.btn}>with moduler css</button>

      <input
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
        type='text'
        value={name}
      />
      <img src={image} alt='' />
      <h1>{name}</h1>

      <ul>
        {namesList.map((name, index) => (
          <div key={index}>
            <li>{name}</li>
            <button>Delete</button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Button;
