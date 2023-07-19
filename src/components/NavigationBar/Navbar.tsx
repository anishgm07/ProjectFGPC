import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="navbar_item" activeClassName="active"> Home </NavLink>
      <NavLink to="/about" className="navbar_item" activeClassName="active"> About </NavLink>
      <NavLink to="/sermons" className="navbar_item" activeClassName="active"> Sermons </NavLink>
      <NavLink to="/live" className="navbar_item" activeClassName="active"> Live Stream </NavLink>
      <NavLink to="/gallery" className="navbar_item" activeClassName="active"> Gallery </NavLink>
      <NavLink to="/events" className="navbar_item" activeClassName="active"> Events </NavLink>
      <NavLink to="/contact" className="navbar_item" activeClassName="active"> Contact </NavLink>
    </nav>
  );
}

export default Navbar;
