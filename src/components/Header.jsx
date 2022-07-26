import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <ul className="header__ul">
        <li>
          <img
            src="https://lh3.googleusercontent.com/EexeEEpqy6MjEPX2oMMnQlglAfA799jGEe8EwzldGPTgGwR-Gf_mIF3sI9ZyweYwDEyrCp2D9M4KO1YEv1prjqzvie0_Ehfi-ert=s0"
            alt="logo"
            className="header__logo"
          />
        </li>
        <li>GitHub</li>
      </ul>
      <div className="header__contact">
        <button className="header__contact__btn">Contact</button>
      </div>
    </div>
  );
};

export default Header;
