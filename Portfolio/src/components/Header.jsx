import { useState } from "react";
import Logo from "../images/Logo.png";
import Menu from "../SVG/menu.svg";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
        {isMenuOpen && (
          <div id="mySideNav" className="sidenav">
            <a href="" className="close" onClick={closeMenu}>
              ❌
            </a>
            <ul>
              <li>
                <a href="#">A propos</a>
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
        <a href="#" id="openBtn" onClick={openMenu}>
          <span className="burger-icon">
            <img className="menu-svg" src={Menu} alt="menuSvg" />
          </span>
        </a>
      </header>
    </>
  );
}

export default Header;
