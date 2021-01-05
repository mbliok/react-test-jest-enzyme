import React from 'react';
import logo from '../../assets/img/logo-z.png';

const Header = () => (

  <header className="app-header" >
    <img src={logo} className="app-logo" data-test="logo" />
    <span className="header-text">
      Header component
    </span>
  </header>

);

export default Header;