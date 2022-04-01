import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => (
  <header>
    <h1 className="Bookstore-h1">Bookstore</h1>
    <nav className="nav">
      <ul className="d-flex">
        <li>
          <Link className="BOOKS" to="/">Books</Link>
        </li>
        <li>
          <Link className="CATEGORIES" to="categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
