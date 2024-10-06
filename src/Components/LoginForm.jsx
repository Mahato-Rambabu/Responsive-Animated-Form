import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let errors = {};

    // email validation
    if (!email) {
      isValid = false;
      errors.email = 'Email is required*';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errors.email = 'Invalid Email Address';
    }
    // Password validation
    if (!password) {
      isValid = false;
      errors.password = 'Password is required*';
    } else if (password.length < 6) {
      isValid = false;
      errors.password = 'Password must contain at least 6 characters';
    }
    if (isValid) {
      console.log('Login Info: ', { email, password });
    } else {
      setError(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <motion.h2
        initial={{ opacity: 0, x: -200, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Welcome!
      </motion.h2>

      <motion.div className="form-group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <label>Email*</label>
        <motion.input 
          type="email" 
          placeholder="enter correct email*" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          whileFocus={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
        {error.email && (
          <motion.p 
            className="error"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error.email}
          </motion.p>
        )}
      </motion.div>

      <motion.div className="form-group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label>Password*</label>
        <motion.input 
          type="password" 
          placeholder="enter correct password*" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          whileFocus={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
        {error.password && (
          <motion.p 
            className="error"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error.password}
          </motion.p>
        )}
      </motion.div>

      <motion.div className="form-group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 1.2 },
          }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="button"
        >
          LOGIN
        </motion.button>
      </motion.div>
    </form>
  );
};

export default LoginForm;
