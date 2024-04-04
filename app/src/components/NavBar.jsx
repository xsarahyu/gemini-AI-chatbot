import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-rc-red py-4">
      <ul className="flex justify-center">
        <li className="mx-4">
          <Link to="/" className="text-white text-2xl hover:text-gray-300">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/login" className="text-white text-2xl hover:text-gray-300">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;