import { Link } from 'react-router-dom';

const Navbar = () => {
  <nav>
    <h1>
      <Link to="/" className="logo">React Bookstore</Link>
    </h1>
    <ul>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </nav>;
};

export default Navbar;
