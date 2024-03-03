import { useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const { advice } = response.data.slip;
      setAdvice(advice);
      setLoading(false);
      console.log(advice);
    } catch (error) {
      console.error('Error fetching advice', error.message);
    }
  };

  if (loading) {
    return <p>is Loading...</p>;
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>Give me an advice</span>
        </button>
      </div>
    </div>
  );
}

export default App;
