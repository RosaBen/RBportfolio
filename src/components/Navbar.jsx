import { Link } from "react-router-dom";
import { useState } from "react";
import Toggle from './Toggle';

import githubDark from "../assets/images/github-dark.svg";
import githubLight from '../assets/images/github-light.svg';

export default function Navbar (props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleGitHub = props.isDark ? (
    <img src={ githubLight } className="nav-github nav-light" alt="github logo " />
  ) : (
    <img src={ githubDark } className="nav-github  nav-dark " alt="github logo " />
  );

  return (
    <nav>
      <div className="landing_text">
        <h1 className="landing_name">Rosa Benchabane</h1>
        <h2 className="landing_title">Full Stack Web Developer</h2>
      </div>
      <div className="burger-menu" onClick={ toggleMenu }>
        <div className={ `burger-line ${isMenuOpen ? 'open' : ''}` }></div>
        <div className={ `burger-line ${isMenuOpen ? 'open' : ''}` }></div>
        <div className={ `burger-line ${isMenuOpen ? 'open' : ''}` }></div>
      </div>
      <div className={ `nav-container ${isMenuOpen ? 'menu-open' : ''}` }>
        <div className="navbar-links">
          <Link to="/" className="nav-button" onClick={ closeMenu }>
            Home
          </Link>
          <Link to="/projects" className="nav-button" onClick={ closeMenu }>
            Projects
          </Link>
        </div>
        <Link
          to="https://github.com/RosaBen/RBportfolio"
          target="_blank" rel="noopener noreferrer"
          onClick={ closeMenu }
        >
          { toggleGitHub }
        </Link>
        <div className="navbar-theme" onClick={ props.toggleTheme }>
          <Toggle />
        </div>
      </div>
    </nav>
  );
}
