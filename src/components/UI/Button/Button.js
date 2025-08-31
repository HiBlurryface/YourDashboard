import React from 'react'
import classNames from 'classnames';
import styles from './Button.module.scss';

function Button({ onClick, type, text, className }) {
    return <button onClick={onClick} type={type} className={classNames(styles.button, className)}>
        {text}
    </button>
}

export default Button