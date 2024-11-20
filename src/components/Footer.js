import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Le Bon Coin. Tous droits réservés.</p>
      <nav>
        <a href="/contact">Contact</a>
        <a href="/terms">Conditions d'utilisation</a>
      </nav>
    </footer>
  );
};

export default Footer;
