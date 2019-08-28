import React, { useState } from "react";

import RegisterForm from "../Forms/RegisterForm";
import LoginForm from "../Forms/LoginForm";

import { Container, Switch } from "./styles";

export default function HomePage() {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <Container>
      <Switch>
        <div className="buttons">
          <button
            className={activeForm === "login" && "active"}
            onClick={() => setActiveForm("login")}
            type="button"
            id="login"
          >
            Login
          </button>
          <button
            className={activeForm === "register" && "active"}
            onClick={() => setActiveForm("register")}
            type="button"
            id="register"
          >
            Register
          </button>
        </div>

        <div className="forms">
          {activeForm === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </Switch>
    </Container>
  );
}
