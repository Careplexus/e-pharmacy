import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/header.css';
import { navBarLinks } from '../data';

const navBarLinksArray = Object.values(navBarLinks);

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='nav-container'>
      <h2 className='logo'>Careplexus</h2>
      <button onClick={handleMenu}>{isOpen ? <i>&#10006;</i> : <i>&#9776;</i> }</button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
      { navBarLinksArray.map((link, index) =>(
        <p key={index}><NavLink to={`${link.to}`}>{link.name}</NavLink></p>
      ))}
      </div>
      
    </div>
  )
}

export default Header;