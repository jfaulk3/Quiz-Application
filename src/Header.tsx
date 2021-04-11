import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="row">
      <h1 className="text-center">My Quiz App</h1>
      <button type="button" className="btn btn-light">
        Home
      </button>
    </header>
  );
}

export default Header;
