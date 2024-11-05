import "./Header.css";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="nav__home">
            Home
          </Link>
          <Link to="/counter" className="nav__counter">
            Counter
          </Link>
          <Link to="/input" className="nav__input">
            Input
          </Link>
        </nav>
      </div>
    </header>
  );
}
