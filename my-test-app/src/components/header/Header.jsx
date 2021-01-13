import React from 'react';
import logo from '../../assets/img/logo.png';

const Header = () => (

  <header className="app-header" >
    <img src={logo} alt="logo" className="app-logo" data-test="logo" />

    <span className="header-text">
      NIKE Header component
    </span>
  </header>

);

export default Header;