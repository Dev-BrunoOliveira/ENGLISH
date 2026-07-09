import React, { useState } from 'react';
import { Mail, Lock, LogIn, UserPlus } from 'lucide-react';

interface AuthProps {
  onLogin: (email: string, pass: string) => { success: boolean; error?: string };
  onSignup: (email: string, pass: string) => { success: boolean; error?: string };
}

export const Auth: React.FC<AuthProps> = ({ onLogin, onSignup }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const result = isLoginMode ? onLogin(email, password) : onSignup(email, password);
    
    if (!result.success && result.error) {
      setError(result.error);
    }
  };

  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', minHeight: '100vh' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <video 
          src="/piscando.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ 
            width: '100%', 
            maxWidth: '240px',
            aspectRatio: '1 / 1',
            objectFit: 'cover', 
            marginBottom: '1.5rem', 
            filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.4))', 
            borderRadius: '50%',
            backgroundColor: '#fff'
          }} 
        />

        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
          Learn <span className="text-gradient">English</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
          {isLoginMode ? 'Welcome back! Please login to continue.' : 'Create an account to start learning.'}
        </p>

        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ position: 'relative' }}>
            <Mail size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input 
              type="email" 
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%', padding: '14px 14px 14px 48px',
                borderRadius: '12px', border: '1px solid var(--glass-border)',
                background: 'rgba(0,0,0,0.2)', color: 'white',
                outline: 'none', fontSize: '1rem', fontFamily: 'inherit',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-secondary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <Lock size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%', padding: '14px 14px 14px 48px',
                borderRadius: '12px', border: '1px solid var(--glass-border)',
                background: 'rgba(0,0,0,0.2)', color: 'white',
                outline: 'none', fontSize: '1rem', fontFamily: 'inherit',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-secondary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
            />
          </div>

          {error && <div style={{ color: '#ef4444', fontSize: '0.875rem', textAlign: 'center' }}>{error}</div>}

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '14px', fontSize: '1.125rem', marginTop: '0.5rem', display: 'flex', justifyContent: 'center' }}
          >
            {isLoginMode ? <><LogIn size={20} /> Login</> : <><UserPlus size={20} /> Create Account</>}
          </button>
        </form>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          {isLoginMode && (
            <button 
              onClick={() => alert('Check your email for reset instructions. (Mock)')}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.875rem', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Forgot Password?
            </button>
          )}
          
          <div style={{ display: 'flex', gap: '8px', fontSize: '0.875rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>
              {isLoginMode ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button 
              onClick={() => { setIsLoginMode(!isLoginMode); setError(''); }}
              style={{ background: 'none', border: 'none', color: 'var(--accent-secondary)', cursor: 'pointer', fontWeight: 'bold' }}
            >
              {isLoginMode ? 'Sign Up' : 'Login'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
