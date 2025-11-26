import React, { useState } from 'react';

function Forms() {
  const [email, setEmail] = useState('abc@gmail.com');
  const [password, setPassword] = useState('12345678');

  function handleClick(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <div>
      <form action=''>
        <label htmlFor=''>Email</label>
        <input
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          value={email}
          type='email'
          name=''
          id=''
        />
        <label htmlFor=''>Password</label>
        <input
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          value={password}
          type='password'
          name=''
          id=''
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default Forms;
