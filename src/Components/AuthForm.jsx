import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './AuthForm.css';

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevState) => !prevState);
  };

  const pageVariants = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
  };

  return (
    <div className="auth-form-container">
      <AnimatePresence mode="wait">
        {isLogin ? (
          <motion.div
            key="login"
            initial="initial "
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
          >
            <LoginForm />
            <p>
              Don't have an Account?{' '}
              <span className="link" onClick={toggleForm}>
                SignUp*
              </span>
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="register"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
          >
            <RegisterForm />
            <p>
              Already signed in?{' '}
              <span className="link" onClick={toggleForm}>
                Login
              </span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthForm;
