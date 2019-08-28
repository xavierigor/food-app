import React from "react";

import { Container } from "./styles";

export default function RegisterForm() {
  function handleFormSubmit(e) {
    e.preventDefault();
    alert("submitted");
  }

  return (
    <Container>
      <form onSubmit={e => handleFormSubmit(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit">Register</button>
      </form>
    </Container>
  );
}
