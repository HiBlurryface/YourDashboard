import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

function Input({ name, value, onChange, text, className, placeholder, val }) {
    return (
        <input
            name={name}
            value={value}
            onChange={onChange}
            type={text}
            placeholder={placeholder}
            className={classNames(
                styles.input,
                className,
                { [styles.input__error]: val }
            )} />
    )
}

export default Input