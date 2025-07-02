import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiPost, setToken } from '../services/apiRequestResponse';
import axios from 'axios';

const AdminLogin = ({setIsAuthenticated}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic,
    // e.g., send a request to your backend for authentication.
    const loginAdmin=async ()=>{
      try{
        const res=await apiPost('/auth/login',{userName:email,password:password});
      console.log(res);
      if(res.token)
      {
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + res.token;
        setToken(res.token);
        setIsAuthenticated(true);
        navigate('/admin');
      }
      }
      catch(err)
      {
        console.log(err);
      }
    }
    loginAdmin();
      
      // Redirect or perform other actions upon successful login
  };

  return (
    <section id="login-section" className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100 my-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
      <form id="admin-login-form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="admin-email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="admin-email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="admin-password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            id="admin-password"
            name="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out shadow-md"
        >
          Login
        </button>
        {message && (
          <p id="admin-login-message" className={`mt-4 text-center text-sm ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
        <p className="mt-4 text-center text-gray-600">
          <a href="#" id="admin-signup-link" className="text-indigo-600 hover:underline">Or Sign Up (Admin only)</a>
        </p>
      </form>
    </section>
  );
};

export default AdminLogin;