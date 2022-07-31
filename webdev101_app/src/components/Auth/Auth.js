import React, { useState } from "react";
import "./Auth.css";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Auth() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {};

  const logout = async () => {};

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
            }}
          />
        </Form.Group>
        <div className="login-btn">
          <Button variant="primary" type="submit">
            Login
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
