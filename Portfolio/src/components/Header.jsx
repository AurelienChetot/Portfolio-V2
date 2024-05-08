import { useState } from "react";

import Logo from "../images/Logo.png";
import Menu from "../SVG/menu.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className={menuOpen ? "sidenav active" : "sidenav"}>
        <p className="close" onClick={toggleMenu}>
          <span className="cursor-menu-close">❌</span>
        </p>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Mes projets</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <a id="openBtn" onClick={toggleMenu}>
        <span className="burger-icon">
          <img className="menu-svg" src={Menu} alt="menuSvg" />
        </span>
      </a>
    </header>
  );
}

export default Header;
