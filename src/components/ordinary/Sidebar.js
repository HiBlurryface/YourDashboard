import React from "react";
import { NavLink } from "react-router";

import styles from './Sidebar.module.scss';

function Sidebar() {
    const navigation = [
        {
            title: 'Home',
            href: '/home',
            icon:
                <svg viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.0001 16V11H12.0001V16C12.0001 16.55 12.4501 17 13.0001 17H16.0001C16.5501 17 17.0001 16.55 17.0001 16V8.99997H18.7001C19.1601 8.99997 19.3801 8.42997 19.0301 8.12997L10.6701 0.599971C10.2901 0.259971 9.7101 0.259971 9.3301 0.599971L0.970098 8.12997C0.630098 8.42997 0.840098 8.99997 1.3001 8.99997H3.0001V16C3.0001 16.55 3.4501 17 4.0001 17H7.0001C7.5501 17 8.0001 16.55 8.0001 16Z" fill="#4318FF" />
                </svg>
            ,
        },
        {
            title: 'ToDo',
            href: '/ToDo',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon" version="1.1"><path d="M379.733333 386.133333l-157.866666 155.733334-89.6-87.466667L85.333333 501.333333l136.533334 136.533334 204.8-204.8zM379.733333 108.8l-157.866666 155.733333-89.6-87.466666L85.333333 224l136.533334 136.533333L426.666667 155.733333zM379.733333 663.466667l-157.866666 155.733333-89.6-87.466667L85.333333 778.666667l136.533334 136.533333 204.8-204.8z" fill="#3F51B5" /><path d="M512 469.333333h426.666667v85.333334H512zM512 192h426.666667v85.333333H512zM512 746.666667h426.666667v85.333333H512z" fill="#90CAF9" /></svg>
        },
    ]

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
                            {/* <a href={item.href} className={styles.nav__link}>
                                <span className={styles.nav__icon}>
                                    {item.icon}
                                </span>
                                {item.title}
                            </a> */}
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