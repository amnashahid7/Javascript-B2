import React, { useEffect, useState } from 'react';

function useFetch({ url }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let resp = await fetch(url);
        let dataGot = await resp.json();
        console.log(dataGot.users);

        if (resp.ok) {
          setData(dataGot.users);
        } else {
          console.log(resp);
        }
      } catch (error) {
        console.log(error);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return [data, error, loading];
}

export default useFetch;
