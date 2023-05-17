import "./styles.css";
import React, { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1)
  }
  return (
    <div className="App">
      <h1>{`Button clicked ${ count } Times`}</h1>
      <button onClick={handleClick}>Click ME</button>
    </div>
  );
}
