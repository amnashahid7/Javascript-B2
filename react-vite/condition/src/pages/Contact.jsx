import React, { useState } from 'react';
import SideEffects from '../Components/SideEffects';
import Conditions from '../Components/Conditions';
import Button from '../Components/ui/Button';
import { Link, NavLink } from 'react-router-dom';

function Contact() {
  const [data, setData] = useState('');
  return (
    <div>
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
