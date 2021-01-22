import React from 'react';
import Button from '../Button';
import styles from '../../styles/error.module.scss';

function Footer() {
  return (
    <div className="app-footer">
      <Button text="footer" className="btn" />
      <span className="error">Error css</span><br />
      <span className={styles.error}>Error module</span><br />
      <span>Customer service:  +395 898 000 555</span>
    </div>
  );
}
export default Footer;
