import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient.js'

function App() {
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');

  useEffect(() => {
    async function checkConnection() {
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        setConnectionStatus('Connection Failed ❌');
      } else {
        setConnectionStatus('Connected to Supabase! ✅');
      }
    }

    checkConnection();
  }, []);

  return (
    <div className="App">
      <h1>Progsense Prototype</h1>
      <p>Status: {connectionStatus}</p>
    </div>
  );
}

export default App;