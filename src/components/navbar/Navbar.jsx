import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import { FaBars } from 'react-icons/fa'
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = () => {};
  return (
    <nav >
      <ul className={isOpen ? "nav-links active": "nav-links"}>
        <li>
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={handleSetActive()}
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={handleSetActive}
            onClick={toggleMenu}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            onClick={toggleMenu}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onSetActive={handleSetActive}
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>
      </ul>
      <div className="icon" onClick={toggleMenu}>
        {
          isOpen ? <IoClose className='bars-icon' /> : <FaBars className='bars-icon'/>  
        }  
          
      </div>
    </nav>
  );
};

export default Navbar;
