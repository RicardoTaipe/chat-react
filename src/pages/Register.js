import React from "react";
import Add from "../img/addAvatar.png";
const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">React Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" name="" placeholder="display name" />
          <input type="email" name="" placeholder="email" />
          <input type="password" name="" placeholder="password" />
          <input type="file" name="" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="add avatar" />
            <span>Add an avatar</span>
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
