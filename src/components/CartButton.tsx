import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center p-4 bg-gray-800 text-white">
      <a href="https://github.com/sabrinaurellia" className="mr-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-6 h-6 inline-block" />
      </a>
      <a href="https://www.linkedin.com/in/sabrinaaurellia/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6 inline-block" />
      </a>
    </footer>
  );
};

export default Footer;
