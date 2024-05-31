import { useState } from "react";
import "../css/Navbar.css";
import logo from "../assets/images/logo-nature.png";
function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar container">
          {/* logo */}
          <a href="#home" className="logo">
            <img src={logo} alt="" />
          </a>
          <ul className={`navMenu ${isActive ? "active" : ""}`}>
            <li onClick={removeActive}>
              <a href="#home" className="navLink">
                Home
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className="navLink">
                Catalog
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className="navLink">
                All products
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className="navLink">
                Contact
              </a>
            </li>
          </ul>
          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleActiveClass}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
