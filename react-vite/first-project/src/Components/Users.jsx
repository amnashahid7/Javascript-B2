import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

function Users() {
  const [data, error, loading] = useFetch('https://dummyjson.com/users');

  return error ? (
    <h1>{error}</h1>
  ) : (
    <div>{!loading ? <h1>{data[0].username}</h1> : <h1>Loading......</h1>}</div>
  );
}

export default Users;
