import React from "react";
import Logo from "../../Assets/Images-20230412T100529Z-001/Images/RiseAboveCoachingLogo.png"
import "./header.css";

function Header() {
  return (
    <div>
      <nav className="navbar-flex">
        <div >
          <img class="nav-img" src={Logo} alt="Website Logo" height="50" />
        </div>
        <div>
          {" "}
          <ul>
            <li>
              <a className="nav-section" href="#home">Home</a>
            </li>
            <li>
              <a  className="nav-section"href="#about">Services</a>
            </li>
            <li>
              <a className="nav-section" href="#services">Event</a>
            </li>
            <li>
              <a className="nav-section" href="#contact">Partner</a>
            </li>
            <li>
              <a className="nav-section" href="#contact">Uplift</a>
            </li>
            <li>
              <a className="nav-section" href="#contact">About</a>
            </li>
            <li>
              <a  className="nav-section" href="#contact">Contact</a>
            </li>
            <li>
              <a  className="nav-section"href="#contact">Resources</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Header;
