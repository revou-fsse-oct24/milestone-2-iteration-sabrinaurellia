import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 ShopSmart</p>
      <div className="social-icons">
        <a href="https://github.com/sabrinaurellia" className="mr-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
            alt="GitHub" className="w-6 h-6 inline-block" />
        </a>
        <a href="https://www.linkedin.com/in/sabrinaaurellia/">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
            alt="LinkedIn" className="w-6 h-6 inline-block" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
