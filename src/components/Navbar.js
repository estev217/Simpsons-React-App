import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';

function Navbar() {
    return (
      <nav className="Navbar">Les Simpson
      </nav>
    );
  }

  ReactDOM.render(<Navbar />, document.getElementById('root'));

  export default Navbar;