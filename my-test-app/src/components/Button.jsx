import React from 'react';
// import styles from '../styles/button.module.scss';

function Button(props) {
    return (
        <button className={props.className}>{props.text}</button>
    );
}
export default Button;
