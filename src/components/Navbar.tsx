import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/NavBar.css'


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
        <ul className="navbar_list">
            <li className="navbar_item"><Link to="/" className="navbar_link">Home</Link></li>
            <li className="navbar_item"><Link to="/about" className="navbar_link">About</Link></li>
            <li className="navbar_item"><Link to="/contact" className="navbar_link">Contact</Link></li>
        </ul>
  </nav>
  );
}

export default Navbar;
