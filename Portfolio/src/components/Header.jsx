import { useState } from "react";
import Logo from "../images/Logo.png";
import Menu from "../SVG/menu.svg";

function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        {MenuOpen && (
          <div id="mySideNav" className="sidenav">
            <p className="close" onClick={closeMenu}>
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
        )}
        <a id="openBtn" onClick={openMenu}>
          <span className="burger-icon">
            <img className="menu-svg" src={Menu} alt="menuSvg" />
          </span>
        </a>
      </header>
    </>
  );
}

export default Header;
