import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';  // Assuming you are using react-toastify for error notifications

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Successfully logged in, set user context and store user in localStorage
      setAuthUser(data);
      localStorage.setItem('chat-user', JSON.stringify(data));
    } catch (error) {
      // Handle any error that occurs
      toast.error(error.message || 'An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
