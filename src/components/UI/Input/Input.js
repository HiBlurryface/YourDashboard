import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

function Input({ value, onChange, text, className }) {
    return (
        <input
            value={value}
            onChange={onChange}
            type={text}
            className={classNames(styles.input, className)} />
    )
}

export default Input