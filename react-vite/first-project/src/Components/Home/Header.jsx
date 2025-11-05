import React from 'react';
import Button from '../ui/Button';

function Header() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div>
          <img
            width={50}
            src='https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80'
            alt=''
          />
        </div>
        <div>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
        <div>
          <Button
            text={'login'}
            image={''}
            para={'jhshsa'}
            title={'mbcmnasb'}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
