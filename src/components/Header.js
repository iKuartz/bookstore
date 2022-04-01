import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header>
    <h1 className="Bookstore-CMS">Bookstore CMS</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">
            Books
          </Link>
        </li>
        <li>
          <Link to="categories">
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
