import React, { useEffect, useState } from 'react';
import Button from './ui/Button';

function SideEffects({ liftDataUp }) {
  const [data, setData] = useState();

  useEffect(() => {
    console.log(data);
    liftDataUp(data);
  }, [data]);

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log('timeout run');
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  async function getData() {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await res.json();
      setData(data);
      console.log('data fetched success');
    } catch (error) {
      console.log('got error', error);
    }
  }

  // https://jsonplaceholder.typicode.com/

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Button
        text={'hello'}
        textColor={'yellow'}
        bgc={'black'}
        radius={'10px'}
        onClick={() => {
          let num = Math.random();
          setData(`hello ${num}`);
        }}
      ></Button>
      <div>hello </div>
    </div>
  );
}

export default SideEffects;
