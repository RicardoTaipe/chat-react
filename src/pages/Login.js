import React from "react";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">React Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="email" name="" placeholder="email" />
          <input type="password" name="" placeholder="password" />
          <button type="submit">Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
