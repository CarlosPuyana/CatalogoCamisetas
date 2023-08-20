import React, { useState } from 'react';
import { auth } from '../supabase.ts';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const result = await auth.signUp({ email, password });

        if (result.error) {
            setError(result.error.message);
            return;
          }

        console.log('User logged in successfully:', result.data.user);
      // Redirigir al usuario al Home

        return result;
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Error logging in');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default LoginForm;
