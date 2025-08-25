import React from 'react'

import styles from './Button.module.scss';

function Button(item) {
    return <a href={item.href} className={styles.button}>
        {item.text}
    </a>
}

export default Button