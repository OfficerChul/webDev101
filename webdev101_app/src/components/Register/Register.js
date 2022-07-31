import React, { useState } from "react";
import "./Register.css";
import { Container, Button, Form } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState(
    "Please enter a very secure password."
  );
  const [emailErrMsg, setEmailErrMsg] = useState(
    "We'll never share your email with anyone else."
  );

  const register = async () => {
    if (registerPassword.length < 6) {
      setPasswordErrMsg("Password should be at least 6 characters long.");
    } else {
      setPasswordErrMsg("");
    }

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        setEmailErrMsg("The email you entered is already in use.");
      }
      console.log(error.message);
      console.log(error.code);
    }
  };

  return (
    <div className="register">
      {/* <Container> */}
      <Form className="login-form" style={{ width: "60%" }}>
        <h1 className="regi-h1">Welcome to WebDev 101 Course Website!</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold" }}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
              console.log(`email: ${registerEmail}`);
            }}
          />
          <Form.Text className="email-msg">{emailErrMsg}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
              console.log(`password: ${registerPassword}`);
            }}
          />

          <Form.Text
            className="pwd-msg"
            style={
              registerPassword.length < 6 ? { color: "red" } : { color: "grey" }
            }
          >
            {passwordErrMsg}
          </Form.Text>
        </Form.Group>
        <div className="login-btn">
          <Button onClick={register} variant="primary">
            Register
          </Button>
        </div>
      </Form>
      {/* </Container> */}
    </div>
  );
}
