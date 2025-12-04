import React, { useState } from 'react';

function Conditions({ dataFromP }) {
  const [data, setData] = useState(true);
  const [loading, setLoading] = useState(true);

  console.log('hello from conditions', dataFromP);

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <div>
      <button
        onClick={() => {
          setData(!data);
        }}
      >
        toggle
      </button>
      {loading ? (
        <>
          <h1>Loading Content ......</h1>
        </>
      ) : (
        <>
          <h1>Content</h1>
          <h1>dsajjak</h1>
        </>
      )}
    </div>
  );
}

export default Conditions;
