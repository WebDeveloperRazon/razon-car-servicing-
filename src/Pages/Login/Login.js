import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const emailRef =useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value ;
    const password = passwordRef.current.value ;
    console.log(email , password);
  }
  const handleRegister =() => {
    navigate('/register');
  }
    return (
        <div className="container w-50 mx-auto mt-5">
            <h1 className="text-primary text-center  "> Login</h1>
            <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p className='mt-3'>New To Razon's Servicing Center ?? <Link  to="/register" className="text-primary pe-auto text-decoration-none"  onClick={handleRegister}>Please Register your Account</Link></p>
        </div>
    );
};

export default Login;