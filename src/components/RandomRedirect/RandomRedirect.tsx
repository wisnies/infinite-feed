import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const RandomRedirect: React.FC = () => {
  const [randomId, setRandomId] = useState(1);

  const generateRandomId = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    setRandomId(num);
  };
  useEffect(() => {
    generateRandomId();
  }, []);
  return (
    <div>
      <p>Current random id: {randomId}</p>
      <button onClick={generateRandomId}>Generate</button>
      <Link to={`/products/${randomId}`}>Product details</Link>
    </div>
  );
};
