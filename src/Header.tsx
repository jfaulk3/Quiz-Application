import React from "react";
import "./Header.css";

interface Props {
  reset: () => void;
}

const Header: React.FC<Props> = ({ reset }) => {
  return (
    <header className="row">
      <h1 className="text-center">My Quiz App</h1>
      <button type="button" className="btn btn-light" onClick={reset}>
        Home
      </button>
    </header>
  );
};

export default Header;
