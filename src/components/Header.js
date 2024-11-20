import React from "react";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

const Header = ({ user }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <Link to="/offers">
            <img src="https://www.leboncoin.fr/logos/leboncoin.svg" alt="logo le Bon Coin" />
          </Link>
        </h1>
        <nav>
          <Link to="/publish" className="publish-btn">
            <AddBoxIcon className="icon-deposer-annonce" /> Déposer une annonce
          </Link>
          <div className="search-container">
            <input type="search" id="site-search" name="q" placeholder="Rechercher sur Le Bon Coin" />
            <SearchIcon className="search-icon" />
          </div>
          <button className="user-btn">
            <PersonOutlineIcon /> {user || "Se connecter"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
