import "./Header.css";

interface Props {
  reset: () => void;
}

const Header: React.FC<Props> = ({ reset }) => {
  return (
    <header className="header row">
      <h1 className="text-center p-3 m-0">My Quiz App</h1>
      <button type="button" className="btn btn-light" onClick={reset}>
        Home
      </button>
    </header>
  );
};

export default Header;
