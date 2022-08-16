import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>
      <Link to="/" className="logo"> React Bookstore </Link>
    </h1>
  </nav>
);

export default Navbar;
