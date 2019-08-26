import React from "react";
// import { Link } from "react-router-dom";

// import { Container } from './styles';

export default function HomePage() {
  function _handleGithubSignin() {
    window.open("http://localhost:3333/auth/github", "_self");
  }

  return (
    <div>
      <button onClick={() => _handleGithubSignin()}>Sign in with GitHub</button>
    </div>
  );
}
