import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem('englishAppUser', user);
    } else {
      localStorage.removeItem('englishAppUser');
    }
  }, [user]);

  const login = (email: string, pass: string) => {
    const savedPass = localStorage.getItem(`pass_${email}`);
    if (savedPass && savedPass === pass) {
      setUser(email);
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password' };
  };

  const signup = (email: string, pass: string) => {
    if (localStorage.getItem(`pass_${email}`)) {
      return { success: false, error: 'Email already exists' };
    }
    localStorage.setItem(`pass_${email}`, pass);
    setUser(email);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, signup, logout };
}
