import React, { useState } from "react";
import "./Auth.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

export default function Auth() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log('pressed login button');
      console.log(user);
    } catch (error) {
      console.log(error.message);
      console.log(error.code);
    }
  };


  return (
    <div className="Auth">
      {/* <Container> */}
      <Form className="login-form" style={{ width: "60%" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold" }}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
              console.log(event.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
              console.log(event.target.value);
            }}
          />
        </Form.Group>
        <div className="login-btn">
          <Button variant="primary" type="submit" onClick={login}>
            Log In
          </Button>
          <Link to="/webDev101/auth/register">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Link>
        </div>
      </Form>
      {/* </Container> */}
    </div>
  );
}

