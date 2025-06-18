// src/components/auth/LoginForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Flower, KeyRound, LogIn } from 'lucide-react';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm rounded-2xl bg-card shadow-2xl shadow-black/20">
        <div className="flex flex-col items-center justify-center p-8 md:p-12 space-y-6">
          <div className="p-4 rounded-full bg-primary/10 text-primary">
            <Flower size={48} strokeWidth={1.5} />
          </div>
          <div className="text-center">
            {/* UPDATE THESE LINES */}
            <h1 className="text-2xl font-bold text-foreground">Loop Reverie</h1>
            <p className="text-foreground/70 mt-1">Enter the password to access the pattern library.</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-white/20 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                aria-label="Password"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-transform duration-200 hover:scale-105 active:scale-100"
            >
              <LogIn size={20} />
              Unlock
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;