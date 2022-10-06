import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">React Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/13580531/pexels-photo-13580531.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Rick</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
