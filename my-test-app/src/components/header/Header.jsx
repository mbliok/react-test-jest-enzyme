import React from 'react';
import logo from '../../assets/img/logo.png';
import Button from '../Button';
import styles from '../../styles/button.module.scss';
const Header = () => (

  <header className="app-header" >


    <Button text="error" className={styles.btnError} />
    <Button text="primary" className={styles.primary} />
    <img src={logo} alt="logo" className="app-logo" data-test="logo" />

    <span className="header-text">
      NIKE Header component
    </span>
  </header>

);

export default Header;