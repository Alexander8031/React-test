import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="nav__home">
            Home
          </a>
          <a href="#" className="nav__counter">
            Counter
          </a>
          <a href="#" className="nav__input">
            Input
          </a>
        </nav>
      </div>
    </header>
  );
}
