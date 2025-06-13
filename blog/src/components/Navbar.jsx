import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/reetha/posts">Home</Link>
    </nav>
  );
};

export default Navbar;