import React from 'react';
import './Register.css';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

const navigate = useNavigate();
    const handleLogin = () => {
        navigate.push('/login')
    }
    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value ;
        const email = event.target.email.value ;
        const password = event.target.password.value ;
    }
    return (
        <div className="register-form" >
           <div>
           <h2 className="mt-5">Register</h2>
           <form onSubmit={handleRegister} className="mt-3">
           <label htmlFor="name" >Name</label><br />
            <input type="text" name="name" id="" placeholder="Enter Your Name" /><br />
            <label htmlFor="email" placeholder="Enter Your Email">Email </label><br />
            <input type="email" name="email" id="" /><br />

            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" id="" placeholder="Enter Your Password" />
            <input className="mt-3" type="submit" value="Submit" />
           </form>
           <p className='mt-5 '>Already have an account ?? <Link  to="/login" className="text-primary pe-auto text-decoration-none"  onClick={handleLogin}>Please Login</Link></p>

           </div>
        </div>
    );
};

export default Register;