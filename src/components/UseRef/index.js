import { useState } from 'react';
function UseRef() {

  let [counter, setCounter] = useState(0);


  const handleClick = () => {
    setCounter(++counter);
  }

  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default UseRef;