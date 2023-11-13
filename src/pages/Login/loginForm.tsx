import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/apis/supabase/supabase';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkSession() {
      const { data, error } = await auth.getSession();
      if (data.session && !error) {
        navigate('/'); // Si ya hay una sesión activa, redirigir a la página de inicio
      }
    }
    checkSession();
  }, [navigate]); // El segundo argumento vacío asegura que esto solo se ejecute una vez al montar el componente

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await auth.signInWithPassword({ email, password });

      if (error) {
        setError(error.message);
        return;
      }

      console.log('User logged in successfully');
      navigate('/');
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
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default LoginForm;
