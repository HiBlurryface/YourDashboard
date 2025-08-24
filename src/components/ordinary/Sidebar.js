import React from "react";
import { NavLink } from "react-router";
import navigation from "../../store/Navigation";

import styles from './Sidebar.module.scss';

function Sidebar() {

    return <aside className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <h1 className={styles.logo__title}>
                    YourDashboard
                </h1>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    {navigation.map((item) => {
                        console.log(item)
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