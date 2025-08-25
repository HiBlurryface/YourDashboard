import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router";
import navigation from "../../store/Navigation";

import styles from './Sidebar.module.scss';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    return <aside
        className={styles.wrapper}
        className={isOpen ? styles.wrapper + ' ' + styles.wrapper__active : styles.wrapper}
    >
        <div className={styles.container}>
            <div className={styles.logo}>
                <h1 className={styles.logo__title}>
                    YourDashboard
                </h1>
                <div
                    className={isOpen ? styles.burger + ' ' + styles.burger__active : styles.burger}
                    onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    {navigation.map((item) => {
                        return <li className={styles.nav__item}>
                            <NavLink to={item.href}
                                className={({ isActive }) => isActive ? styles.nav__link + ' ' + styles.nav__link_active : styles.nav__link}
                            >
                                <span className={styles.nav__icon}>
                                    {item.icon}
                                </span>
                                {item.title}
                            </NavLink>
                        </li>
                    })}
                </ul>
            </nav>
        </div>
    </aside>
}

export default Sidebar;