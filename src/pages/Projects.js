import React from "react";

import Button from "./../components/UI/Button/Button.js"
import projects from './../store/Projects.js';

import styles from './../assets/styles/Projects.module.scss'

function Projects() {
    console.log(projects)
    return <div className={styles.wrapper}>
        {projects.map((item) => {
            return <div className={styles.project}>
                <div className={styles.project__preview}>
                    <img src={item.preview} alt="" className={styles.project__img} />
                </div>
                <div className={styles.project__text}>
                    <h4 className={styles.project__title}>
                        {item.title}
                    </h4>
                    <p className={styles.project__info}>
                        {item.text}
                    </p>
                </div>
                <div className={styles.project__footer}>
                    <Button text="Show" href="https://www.nowayout-escape.at/" />
                </div>
            </div>
        })}
    </div>
}

export default Projects