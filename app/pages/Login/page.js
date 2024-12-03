'use client';  // Add this line

import { useState } from 'react';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      router.push('/pages/Homepage');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="loginContainer">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="loginForm">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        {error && <p className="errorMessage">{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;