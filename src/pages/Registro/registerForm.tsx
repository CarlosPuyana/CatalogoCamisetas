import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase, { auth } from '../../context/supabase/supabase';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const { data, error } = await auth.signUp({ email, password });
  
      if (error) {
        setError(error.message);
        return;
      }
  
      if (data?.user) {
        const user = supabase.auth.getUser();
        console.log(user);
        
        console.log('User registered successfully:', data.user);
        // Redirigir al Home
        navigate('/');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error registering user');
    }
  };
  

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Registrar</button>
      </form>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default RegisterForm;
