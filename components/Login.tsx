import React, { useState } from 'react';
import { USERS } from '../constants';

interface LoginProps {
  onLogin: (email: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (USERS[email] && (
        (email === 'dktr610@gmail.com' && password === '97863694') ||
        (email === 'operator@traffic.com' && password === 'Op@789')
    )) {
      if (otp === '123456') { // Dummy OTP
          onLogin(email);
      } else {
          setError('Invalid OTP. Please use 123456.');
      }
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-navy-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-navy-800 rounded-lg shadow-xl border border-navy-700">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Smart Traffic Management</h1>
          <p className="mt-2 text-slate-400">Authorized Personnel Login</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <p className="text-red-400 text-center bg-red-900/50 p-2 rounded-md">{error}</p>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-navy-700 bg-navy-900 text-slate-400 placeholder-slate-500 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Email address (e.g., dktr610@gmail.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-navy-700 bg-navy-900 text-slate-400 placeholder-slate-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
             <div>
              <input
                id="otp"
                name="otp"
                type="text"
                autoComplete="one-time-code"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-navy-700 bg-navy-900 text-slate-400 placeholder-slate-500 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="OTP (use 123456)"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-800 focus:ring-cyan-500 transition-colors"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;