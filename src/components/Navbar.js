import React from "react";
import {Link} from "react-scroll";

//React FontAwesome Imports//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
<div className="container">

  <a className="navbar-brand"href=" ">Emil Kruszyna</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: "#d6d3d3"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" className="nav-link" offset={-50}  href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="mnie" className="nav-link" offset={-50} href="#">O mnie</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="Dos" className="nav-link" offset={-50} href="#">Doświadczenie</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="Pas" className="nav-link" offset={-20} href="#">Klienci</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="kon" className="nav-link" offset={+20} href="#">kontakt</Link>
      </li>

    </ul>
  </div>
</div>
</nav>
    )
}

export default Navbar
