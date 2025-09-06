import React from 'react'
import classNames from 'classnames';
import styles from './ButtonDelete.module.scss';

function ButtonDelete({ onClick, type, text, className }) {
    return <button onClick={onClick} type={type} className={classNames(styles.button, className)}>
        {text}
    </button>
}

export default ButtonDelete