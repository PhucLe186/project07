import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            navigate('/');
        } else {
            console.log('Sign up form submitted');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <div className={styles.toggle}>
                    <button className={isLogin ? styles.active : ''} onClick={() => setIsLogin(true)}>
                        Login
                    </button>
                    <button className={!isLogin ? styles.active : ''} onClick={() => setIsLogin(false)}>
                        Signup
                    </button>
                </div>

                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

                <form onSubmit={handleSubmit}>
                    {' '}
                    <input type="email" placeholder="Email Address" required />
                    <input type="password" placeholder="Password" required />
                    {!isLogin && <input type="password" placeholder="Confirm password" required />}
                    {isLogin && (
                        <a href="#" className={styles.forgotPassword}>
                            Forgot password?
                        </a>
                    )}
                    <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
                </form>

                <p>
                    {isLogin ? 'Not a member?' : 'Already have an account?'}
                    <span onClick={() => setIsLogin(!isLogin)} className={styles.toggleText}>
                        {isLogin ? ' Signup now' : ' Login now'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;
