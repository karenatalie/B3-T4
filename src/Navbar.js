import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2>B3T4 Explor App</h2>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);
export default Navbar;