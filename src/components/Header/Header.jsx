import React from "react";

import {
  Nav,
  Logo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  Sticky,
} from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Sticky>
        <Nav>
          <Logo to="/">
            <img
              src="https://www.pngplay.com/wp-content/uploads/5/Alphabet-K-PNG-Clipart-Background.png"
              alt="logo"
            />
          </Logo>
          <NavMenu>
            <NavLink className="menu-item" to="projects" smooth={true}>
              Projects
            </NavLink>
            <NavLink className="menu-item" to="about" smooth={true}>
              About
            </NavLink>
            <NavLink className="menu-item" to="skill" smooth={true}>
              Skill
            </NavLink>
            <NavLink className="menu-item" to="contact" smooth={true}>
              Contact
            </NavLink>
          </NavMenu>
          <NavBtn>
            <a
              className="btn PrimaryBtn"
              href="https://drive.google.com/drive/folders/1_-gIdRLTcIhOSUmFsayu_Z6ysbOdy5Jj?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </NavBtn>
          <Bars onClick={toggle} />
        </Nav>
      </Sticky>
    </div>
  );
};

export default Header;
