import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const errors = {};

    if (!name) {
      isValid = false;
      errors.name = 'Name is required*';
    }

    if (!email) {
      isValid = false;
      errors.email = 'Email is required*';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errors.email = 'Invalid email address';
    }

    if (!password) {
      isValid = false;
      errors.password = 'Password is required*';
    } else if (password.length < 6) {
      isValid = false;
      errors.password = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
      isValid = false;
      errors.confirmPassword = 'Passwords does not match*';
    }

    if (isValid) {
      console.log('Register Data:', { name, email, password });
    } else {
      setError(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <motion.h2
        initial={{ opacity: 0, x: 200, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        SIGN UP!
      </motion.h2>

      <motion.div className="form-group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <label>Full Name*</label>
        <motion.input 
          type="text" 
          placeholder="Enter Your Full Name*" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          whileFocus={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
        {error.name && (
          <motion.p 
            className="error"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error.name}
          </motion.p>
        )}
      </motion.div>

      <motion.div className="form-group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label>Email*</label>
        <motion.input 
          type="email"
          placeholder="Enter Your Email*" 
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
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label>Password*</label>
        <motion.input 
          type="password" 
          placeholder="Enter Your Password*" 
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
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <label>Confirm Password*</label>
        <motion.input 
          type="password" 
          placeholder="Confirm Your Password*"
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)}
          whileFocus={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
        {error.confirmPassword && (
          <motion.p 
            className="error"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error.confirmPassword}
          </motion.p>
        )}
      </motion.div>

      <motion.div className="form-group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
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
          SIGN UP
        </motion.button>
      </motion.div>
    </form>
  );
};

export default RegisterForm;
