import React, { useContext, useEffect, useId, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function About() {
  // const { theme } = useContext(ThemeContext);

  const id = useId();
  const id2 = useId();

  let inputRef = useRef(45678);

  useEffect(() => {
    console.log(inputRef.current);

    inputRef.current = 29292;
    console.log(inputRef.current);
  }, []);

  return (
    <div>
      <form action=''>
        <label htmlFor={id}>password</label>
        <input type='password' name='' id={id} />
        <h1>hello register</h1>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default About;
