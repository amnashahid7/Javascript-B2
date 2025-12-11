import React, { useContext, useState } from 'react';
import SideEffects from '../Components/SideEffects';
import Conditions from '../Components/Conditions';
import Button from '../Components/ui/Button';
import { Link, NavLink, useParams } from 'react-router-dom';
import { DarkContext } from '../context/darkContext';

function Contact() {
  const [data, setData] = useState('');
  const { darkMode, setDarkMode } = useContext(DarkContext);
  let blogs = [
    'number one',
    'number two',
    'number three',
    'number four',
    'number five',
    'number six',
  ];

  setDarkMode('from contact');
  console.log('sdkjhs', darkMode);

  let { name } = useParams();
  // console.log('sssssssssss', id);

  return (
    <div>
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
