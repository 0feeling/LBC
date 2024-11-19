import React from "react";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Header.css"; // Si tu veux styliser ton header

const Header = ({ user }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Clone LBC</h1>
        <nav>
          <Link to="/publish" className="publish-btn">
            <AddBoxIcon /> Déposer une annonce
          </Link>
          <button className="user-btn">
            <PersonOutlineIcon /> {user || "Se connecter"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
