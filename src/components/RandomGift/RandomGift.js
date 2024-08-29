import { useRef, useState } from 'react';

function RandomGift() {
  const gifts = [
    'Phone',
    'Laptop',
    'Motorbike',
    'Watch'
  ];

  const [res, setRes] = useState('');
  const counterRef = useRef(0);

  const handleRandom = () => {
    if (counterRef.current < 3) {
      const random = Math.floor(Math.random() * gifts.length);
      setRes(gifts[random]);
      counterRef.current += 1;
    }
    else {
      alert('Het luot random!');
    }

  }

  console.log(counterRef)
  return (
    <>
      <button onClick={handleRandom}>Random</button>

      <div>You have got: {res}</div>
    </>
  );
}

export default RandomGift;