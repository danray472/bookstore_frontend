import React, { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, { email, password });
      console.log('Login successful:', response.data);
      const token = response.data.token;
      localStorage.setItem('token', token);
      enqueueSnackbar('Login successful', { variant: 'success' });
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Login error:', error.response.data);
      enqueueSnackbar('Login error: ' + error.response.data.message, { variant: 'error' });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">Login Book Store</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-4">
        {"Don't have an account? "} 
        <Link to="/register" className="text-blue-500 hover:underline">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
