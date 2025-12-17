import React, { useContext, useState } from 'react';
import SideEffects from '../Components/SideEffects';
import Conditions from '../Components/Conditions';
import Button from '../Components/ui/Button';
import { Link, NavLink, useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

function Contact() {
    const { theme } = useContext(ThemeContext);
  
  const [data, setData] = useState('');
  let blogs = [
    'number one',
    'number two',
    'number three',
    'number four',
    'number five',
    'number six',
  ];

  let { name } = useParams();
  // console.log('sssssssssss', id);

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
      {/* <h1>{blogs[id]}</h1> */}
      <h1>{`hello on my website ${name}`}</h1>
      Contact
      <SideEffects liftDataUp={setData} />
      <Conditions dataFromP={data} />
      <Button
        text={'Register'}
        textColor={'white'}
        bgc={'red'}
        radius={'20px'}
      />
      <a href='/'>open home</a>
      <Link to={'/'}>open home</Link>
      <NavLink to={'/'}>open home</NavLink>
    </div>
  );
}

export default Contact;
