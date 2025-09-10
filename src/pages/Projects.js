import React, { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import classNames from "classnames";

import styles from './../assets/styles/Projects.module.scss'
import { NavLink } from "react-router";

const supabaseUrl = 'https://orfaaqgzqovfsxrvodqu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZmFhcWd6cW92ZnN4cnZvZHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NjYyNDMsImV4cCI6MjA3MjI0MjI0M30.2y3K6pmxQymNHfqeYxYSm3hGq660GI9q5dHqmSW1eKM';
const supabase = createClient(supabaseUrl, supabaseKey)

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()
    }, [])

    async function getProjects() {
        let { data, error } = await supabase
            .from('projects')
            .select('*')
        if (error) console.error(error)
        else setProjects(data)
    }

    return <div className={styles.wrapper}>
        {projects.map((item) => {
            return <div className={classNames(styles.projects, "block")} key={item.id}>
                <div className={styles.project__preview}>
                    <img src={item.preview} alt="" className={styles.project__bg} />
                </div>
                <div className={styles.project__info}>
                    <div className={styles.project__group}>
                        <h3 className={styles.project__title}>
                            {item.title}
                        </h3>
                        <p className={styles.project__text}>
                            {item.text}
                        </p>
                    </div>
                    <div className={styles.project__icon}>
                        <img src={item.icon} alt={item.icon} className={styles.project__img} />
                    </div>
                </div>
                <div className={styles.project__footer}>
                    <a href={item.link} className={styles.project__link}>Link to page</a>
                    <NavLink className={styles.project__more} to={`/projects/${item.title}`}>More</NavLink>
                </div>
            </div>
        })}
    </div>
}

export default Projects