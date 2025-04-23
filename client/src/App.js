import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const baseURL = process.env.REACT_APP_API_URL || '';
    axios.get(`${baseURL}/api/data`)
      .then(res => setMsg(res.data.message))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Response from backend:</h1>
      <p>{msg || 'Loading…'}</p>
    </div>
  );
}

export default App;
